import { client } from '@/sanity/lib';
import { Project } from '@/sanity/types';
import { groq } from 'next-sanity';

export async function getProject(slug: string): Promise<Project> {
    try {
        const projectPageData = await client.fetch(
            groq`
                *[_type == "project" && slug.current == $slug] [0] {
                    _id,
                    slug,
                    title,
                    thumbnail,
                    liveProjectLink,
                    gitRepoLink,
                    description,
                    collaborators[] -> {
                        _id,
                        name,
                        socials,
                        avatar
                    },
                    technologies[] -> {
                        _id,
                        name,
                        link,
                        logo
                    }
                }
            `,
            {
                slug
            }
        );

        return projectPageData;
    } catch (error) {
        console.error('failed to fetch project page data:', error);
        throw new Error('failed to fetch project page data');
    }
}
