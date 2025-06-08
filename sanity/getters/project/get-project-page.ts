import { client } from '@/sanity/lib';
import { ProjectPageData } from '@/sanity/types';
import { groq } from 'next-sanity';

export async function getProjectPageData(): Promise<ProjectPageData> {
    try {
        const projectPageData = await client.fetch(
            groq`
                *[_id == "project-page"] [0] {
                groups[] {
                    _key,
                    projectGroup,
                    projects[] -> {
                        _id,
                        "slug": slug.current,
                        title,
                        featured,
                        summary,
                        thumbnail,
                        liveProjectLink
                    }
                }
                }
            `
        );

        return projectPageData;
    } catch (error) {
        console.error('failed to fetch project page data:', error);
        throw new Error('failed to fetch project page data');
    }
}
