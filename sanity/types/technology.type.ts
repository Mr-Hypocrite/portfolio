import { SanityImageSource } from '@sanity/image-url/lib/types/types';

export type Technology = {
    _id: string;
    link: string;
    logo: SanityImageSource;
    name: string;
};
