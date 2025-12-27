import { useState, type ImgHTMLAttributes } from 'react';
import { ImageOff } from 'lucide-react';

interface ImageWithFallbackProps extends ImgHTMLAttributes<HTMLImageElement> {
    fallbackIconSize?: number;
    containerClassName?: string;
}

export const ImageWithFallback = ({
    fallbackIconSize = 48,
    containerClassName,
    style,
    className,
    ...props
}: ImageWithFallbackProps) => {
    const [error, setError] = useState(false);

    if (error) {
        return (
            <div
                className={containerClassName}
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: 'var(--card-bg)', // Assuming card-bg exists, or use a neutral color
                    color: 'var(--text-secondary)',
                    borderRadius: style?.borderRadius || '0.5rem',
                    width: style?.width || '100%',
                    height: style?.height || '100%',
                    ...style, // Preserve size/layout styles
                }}
            >
                <ImageOff size={fallbackIconSize} />
            </div>
        );
    }

    return (
        <img
            {...props}
            className={className}
            style={style}
            onError={() => setError(true)}
            loading="lazy"
        />
    );
};
