import type { Metadata } from 'next';
import { Container } from 'styled-system/jsx';
import './index.css';

//TODO: placeholders for now will have to update later
export const metadata: Metadata = {
    title: 'Jatin | Web Developer Portfolio',
    description:
        'Jatin is a web developer on a journey to build better web experiences. With over 2 years of hands-on experience, explore projects, skills, and more.',
    metadataBase: new URL('https://yourdomain.com'), // Update with your actual domain
    openGraph: {
        title: 'Jatin | Web Developer Portfolio',
        description:
            'On a journey to build better web experiences. With 2+ years of real-world web development experience, check out my projects and story.',
        url: 'https://yourdomain.com',
        siteName: 'Jatin Portfolio',
        images: [
            {
                url: '/og-image.png',
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
    creator: 'Jatin'
};

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={'dark'}>
                <Container>{children}</Container>
            </body>
        </html>
    );
}
