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
      <div className={`bg-gradient-to-br from-sandstone via-sandstone-dark to-sage/40 flex flex-col items-center justify-center text-earth/40 ${className}`}>
        <span className="material-symbols-outlined text-4xl mb-2" aria-hidden="true">image_not_supported</span>
        <span className="text-xs font-bold uppercase tracking-[0.2em]">Hill Travel Rwanda</span>
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
