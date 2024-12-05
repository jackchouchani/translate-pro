interface OptimizedImageProps {
    src: string;
    alt: string;
    className?: string;
    width?: number;
    height?: number;
}

export const OptimizedImage: React.FC<OptimizedImageProps> = ({
    src,
    alt,
    className,
    width,
    height
}) => {
    return (
        <img
            src={src}
            alt={alt}
            loading="lazy"
            width={width}
            height={height}
            className={className}
        />
    );
};