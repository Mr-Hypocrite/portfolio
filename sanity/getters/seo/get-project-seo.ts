import { client } from '@/sanity/lib';
import { SeoType } from '@/sanity/types/seo.type';
import { groq } from 'next-sanity';
import { seo } from './common-query';

export async function getProjectSeo(projectSlug: string): Promise<SeoType> {
    try {
        const pageSeo = await client.fetch(
            groq`
                *[_type == "project" && slug.current == $projectSlug] [0] {
                    ...${seo}
                }
            `,
            {
                projectSlug
            }
        );

        return pageSeo;
    } catch (error) {
        console.error('failed to fetch project seo data:', error);
        throw new Error('failed to fetch project seo data');
    }
}
