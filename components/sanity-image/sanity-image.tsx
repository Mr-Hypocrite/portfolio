'use client';

import { sanityLoader } from '@/sanity/lib';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import Image, { ImageProps } from 'next/image';
import { FC, useMemo } from 'react';

export interface SanityImageProps extends Omit<ImageProps, 'src' | 'loader'> {
    sanityImageSource: SanityImageSource;
}

export const SanityImage: FC<SanityImageProps> = ({ sanityImageSource, ...props }) => {
    const loader = useMemo(() => {
        return ({ width, quality }: { width: number; quality?: number }) =>
            sanityLoader({ src: sanityImageSource, width, quality });
    }, [sanityImageSource]);
    const fallbackSrc = sanityLoader({ src: sanityImageSource, width: 800 });

    return <Image {...props} src={fallbackSrc} loader={loader} />;
};
