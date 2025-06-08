import createImageUrlBuilder from '@sanity/image-url';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import { dataset, projectId } from '../env';

const builder = createImageUrlBuilder({ projectId, dataset });

export const sanityLoader = ({
    src,
    width,
    quality
}: {
    src: SanityImageSource;
    width: number;
    quality?: number;
}) => {
    return builder
        .image(src)
        .width(width)
        .quality(quality || 75)
        .auto('format')
        .url();
};
