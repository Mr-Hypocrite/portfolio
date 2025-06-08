import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import { PortableTextBlock } from 'next-sanity';
import { Collaborator } from './collaborator.type';
import { Technology } from './technology.type';

export interface IProject {
    projectTitle: string;
}

// A single project
export type Project = {
    _id: string;
    title: string;
    slug: string;
    thumbnail: SanityImageSource;
    liveProjectLink: string;
    gitRepoLink: string;
    figmaPrototype: {
        mobile: string;
        desktop: string;
    };
    featured: boolean;
    summary: PortableTextBlock;
    description: PortableTextBlock;
    collaborators: Collaborator[];
    technologies: Technology[];
};

export type ProjectPreview = Pick<
    Project,
    '_id' | 'featured' | 'liveProjectLink' | 'slug' | 'thumbnail' | 'summary' | 'title'
>;

// A single group (like "personal", "work", etc.)
export type ProjectGroup = {
    _key: string;
    projectGroup: string;
    projects: Project[];
};

// Final response type from your GROQ query
export type ProjectPageData = {
    groups: ProjectGroup[];
};
