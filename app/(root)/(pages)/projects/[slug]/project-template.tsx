import { Project } from '@/sanity/types';
import { SanityImage, Text } from '@/components';
import { FC } from 'react';
import { css } from 'styled-system/css';
import { Box, Flex } from 'styled-system/jsx';
import { Collaborators } from './collaborators';
import { Description } from './description';
import { Links } from './links';
import { ToolsTechnologies } from './tools-technologies';

export interface ProjectTemplateProps extends Project {}

export const ProjectTemplate: FC<ProjectTemplateProps> = ({
    title,
    description,
    liveProjectLink,
    gitRepoLink,
    thumbnail,
    technologies,
    collaborators
}) => {
    return (
        <Flex className={containerStyles} gap={'4'}>
            <Box className={imageContainerStyles}>
                <SanityImage
                    sanityImageSource={thumbnail}
                    fill
                    sizes={'100vw'}
                    alt="project-thumbnail"
                    className={imageStyles}
                />
            </Box>

            <Box maxW={'4xl'}>
                <Text as="h1" textStyle={'heading'}>
                    {title}
                </Text>

                <Description description={description} />

                <Links liveProjectLink={liveProjectLink} githubRepoLink={gitRepoLink} />

                <ToolsTechnologies technologies={technologies} />

                <Collaborators collaborators={collaborators} />
            </Box>
        </Flex>
    );
};

const containerStyles = css({
    flexDir: { base: 'column' },
    minH: 'screen'
});

const imageContainerStyles = css({
    pos: 'relative',
    aspectRatio: '16/9',
    w: 'full',
    h: 'auto'
});

const imageStyles = css({
    borderRadius: 'lg',
    width: 'full',
    height: 'full',
    objectFit: 'cover'
});
