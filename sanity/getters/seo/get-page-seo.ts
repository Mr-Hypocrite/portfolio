import { client } from '@/sanity/lib';
import { SeoType } from '@/sanity/types/seo.type';
import { groq } from 'next-sanity';
import { seo } from './common-query';

type PageId = 'home-page' | 'about-page' | 'project-page';

export async function getPageSeo(id: PageId): Promise<SeoType> {
    try {
        const pageSeo = await client.fetch(
            groq`
                *[_id == $id] [0] {
                    ...${seo}
                }
            `,
            {
                id
            }
        );

        return pageSeo;
    } catch (error) {
        console.error('failed to fetch page seo data:', error);
        throw new Error('failed to fetch page seo data');
    }
}
