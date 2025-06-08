import { getProject, getProjectSeo } from '@/sanity/getters';
import { Metadata } from 'next';
import { ProjectTemplate } from './project-template';

type Props = {
    params: Promise<{ slug: string }>;
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const slug = (await params).slug;
    const projectSeo = await getProjectSeo(slug);

    if (Object.keys(projectSeo).length !== 0) {
        return {
            title: projectSeo.metaTitle,
            description: projectSeo.metaDescription,
            openGraph: {
                title: projectSeo.openGraph?.title,
                description: projectSeo.openGraph?.description,
                url: projectSeo.openGraph?.url,
                siteName: projectSeo.openGraph?.siteName,
                images: [
                    {
                        url: projectSeo?.openGraph?.image?.asset?.url || '/og-image.png',
                        width: 1200,
                        height: 630,
                        alt: "Jatin's Portfolio Preview"
                    }
                ],
                type: 'website'
            },
            authors: [{ name: 'Jatin' }]
        };
    }

    return {};
}

export default async function ProjectPageTemplate({
    params
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;

    const project = await getProject(slug);

    return <ProjectTemplate {...project} />;
}
