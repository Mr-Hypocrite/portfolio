import { Footer, Header, ScrollRestoration } from '@/components';
import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import { Container } from 'styled-system/jsx';
import './index.css';
import { getPageSeo } from '@/sanity/getters';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const poppins = Poppins({
    subsets: ['latin'],
    variable: '--font-poppins',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

export async function generateMetadata(): Promise<Metadata> {
    const pageSeo = await getPageSeo('home-page');

    return {
        title: pageSeo.metaTitle || 'Jatin | Web Developer Portfolio',
        description:
            pageSeo.metaDescription ||
            'Jatin is a web developer on a journey to build better web experiences. With over 2 years of hands-on experience, explore projects, skills, and more.',
        metadataBase: new URL('https://yourdomain.com'), // Update with your actual domain
        openGraph: {
            title: pageSeo.openGraph?.title || 'Jatin | Web Developer Portfolio',
            description:
                pageSeo.openGraph?.description ||
                'On a journey to build better web experiences. With 2+ years of real-world web development experience, check out my projects and story.',
            url: pageSeo.openGraph?.url || 'https://yourdomain.com',
            siteName: pageSeo.openGraph?.siteName || 'Jatin',
            images: [
                {
                    url: pageSeo?.openGraph?.image?.asset?.url || '/og-image.png',
                    width: 1200,
                    height: 630,
                    alt: "Jatin's Portfolio Preview"
                }
            ],
            type: 'website'
        },
        twitter: {
            card: 'summary_large_image',
            title: 'Jatin | Web Developer Portfolio',
            description:
                'On a journey to build better web experiences. 2+ years of coding and creating in the web dev world.',
            images: ['/twitter-image.png']
        },
        authors: [{ name: 'Jatin' }],
        robots: {
            index: true,
            follow: true,
            nocache: false
        },
        creator: 'Jatin',
        icons: {
            icon: '/favicon/dark/favicon.ico'
        }
    };
}

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
            <body className={'dark'}>
                <Header />
                <ScrollRestoration />
                <Container pt={'24'}>{children}</Container>
                <Footer />
            </body>
        </html>
    );
}
