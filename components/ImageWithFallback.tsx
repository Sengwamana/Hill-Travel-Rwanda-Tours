import React, { useState } from 'react';

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackSrc?: string;
}

const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({ 
  src, 
  alt, 
  className, 
  fallbackSrc,
  ...props 
}) => {
  const [error, setError] = useState(false);

  // If error, show fallback UI
  if (error) {
    if (fallbackSrc) {
        return (
            <img 
                src={fallbackSrc} 
                alt={alt} 
                className={className} 
                {...props} 
            />
        );
    }
    return (
      <div className={`bg-sandstone/50 flex items-center justify-center text-earth/30 ${className}`}>
        <span className="material-symbols-outlined text-4xl">image_not_supported</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => setError(true)}
      {...props}
    />
  );
};

export default ImageWithFallback;
