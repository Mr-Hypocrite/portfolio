import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import { PortableTextBlock } from 'next-sanity';

export interface WorkExperience {
    _id: string;
    organization: string;
    organizationLogo: SanityImageSource;
    organizationWebsite: string;
    startDate: string;
    endDate: string;
    role: string;
    description: PortableTextBlock;
}

export interface WorkExperiences {
    experiences: WorkExperience[];
}
