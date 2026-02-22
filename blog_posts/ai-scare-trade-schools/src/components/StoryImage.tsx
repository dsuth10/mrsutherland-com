import React from 'react';

interface StoryImageProps {
  src: string;
  alt: string;
  className?: string;
}

export const StoryImage: React.FC<StoryImageProps> = ({
  src,
  alt,
  className = '',
}) => {
  const [hasError, setHasError] = React.useState(false);

  if (hasError) {
    return (
      <div
        className={`bg-neutral-800 border border-neutral-700 flex items-center justify-center text-neutral-500 min-h-[200px] ${className}`}
        aria-label={alt}
      >
        <span className="text-sm">Image: {alt}</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={(e) => {
        console.error(`Failed to load image: ${src}`, e);
        setHasError(true);
      }}
      loading="lazy"
    />
  );
};

export default StoryImage;
