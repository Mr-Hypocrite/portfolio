import { SanityImageSource } from '@sanity/image-url/lib/types/types';

export type Collaborator = {
    _id: string;
    name: string;
    avatar: SanityImageSource;
    socials: {
        github: string;
        linkedin: string;
    };
};
