const { spawn } = require('child_process');
const path = require('path');

const mcpPath = path.join(__dirname, 'node_modules', '@automattic', 'mcp-wordpress-remote', 'dist', 'proxy.js');
const proc = spawn(process.execPath, [mcpPath, ...process.argv.slice(2)], {
    env: process.env,
});

proc.stderr.pipe(process.stderr);
process.stdin.pipe(proc.stdin);

let buffer = '';
proc.stdout.on('data', (chunk) => {
    buffer += chunk.toString();
    const lines = buffer.split('\n');
    buffer = lines.pop(); // Keep incomplete line

    for (const line of lines) {
        if (!line.trim()) continue;
        try {
            const msg = JSON.parse(line);

            // Apply fixes to tools method
            if (msg.result && msg.result.tools) {
                for (const tool of msg.result.tools) {
                    if (tool.inputSchema && tool.inputSchema.properties) {
                        for (const propDef of Object.values(tool.inputSchema.properties)) {
                            // Fix arrays without items
                            if (propDef.type === 'array' && !propDef.items) {
                                propDef.items = { type: 'string' };
                            }
                            // Fix enums with empty strings
                            if (propDef.enum && Array.isArray(propDef.enum)) {
                                propDef.enum = propDef.enum.filter(e => e !== "");
                                if (propDef.enum.length === 0) {
                                    delete propDef.enum;
                                    propDef.type = "string";
                                }
                            }
                        }
                    }
                }
            }
            process.stdout.write(JSON.stringify(msg) + '\n');
        } catch (e) {
            // Unparseable or error mapping, just pass it through
            process.stdout.write(line + '\n');
        }
    }
});
