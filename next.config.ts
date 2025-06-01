import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    /* config options here */
    webpack: (config) => {
        config.module.rules.push({
            test: /\.svg$/,
            use: ['@svgr/webpack']
        });
        return config;
    },
    images: {
        remotePatterns: [new URL('https://cdn.sanity.io/**')]
    }
};

export default nextConfig;
