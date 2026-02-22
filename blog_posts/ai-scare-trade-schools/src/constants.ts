/**
 * Image paths for the story modules.
 * Local dev: /images/ (from public/)
 * Production: full URLs from wp-content/uploads/ai-scare-trade/
 */
const isLocal =
  typeof window !== 'undefined' &&
  (window.location.hostname === 'localhost' ||
    window.location.hostname === '127.0.0.1' ||
    window.location.hostname.startsWith('192.168.'));

const IMAGE_BASE = isLocal
  ? '/images'
  : 'https://mrsutherland.net/wp-content/uploads/ai-scare-trade';

export const IMAGES = {
  hero: `${IMAGE_BASE}/image5.png`,
  module1: `${IMAGE_BASE}/Image1.png`,
  module2: `${IMAGE_BASE}/image2.png`,
  module3: `${IMAGE_BASE}/image3.png`,
  module4: `${IMAGE_BASE}/image4.png`,
} as const;
