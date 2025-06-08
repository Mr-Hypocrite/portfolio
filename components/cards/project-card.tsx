import { ProjectPreview } from '@/sanity/types';
import { Icon, Link, SanityImage } from '@/components';
import { MoveUpRightIcon } from 'lucide-react';
import { FC } from 'react';
import { css, cx } from 'styled-system/css';
import { Box, Flex } from 'styled-system/jsx';

export interface ProjectCardProps extends ProjectPreview {
    localProjectLink?: string;
}

export const ProjectCard: FC<ProjectCardProps> = ({
    featured,
    liveProjectLink,
    title,
    thumbnail,
    localProjectLink,
    ...props
}) => {
    return (
        <Box className={cx('group', projectCardStyles)}>
            <Link
                href={localProjectLink ?? '/'}
                css={{
                    _hover: {
                        color: 'unset'
                    },
                    display: 'inline-block',
                    position: 'relative',
                    w: 'full',
                    h: 'full'
                }}
                {...props}
            >
                <SanityImage
                    sanityImageSource={thumbnail}
                    fill
                    alt={`${title} project-thumbnail`}
                    priority
                    sizes={`${featured ? '(max-width: 768px) 100vw' : '(max-width: 768px) 100vw, 33vw'}`}
                    className={imageStyles}
                />
            </Link>
            {liveProjectLink && (
                <Flex alignItems={'center'} justifyContent={'center'} className={overlayStyles}>
                    <Link
                        href={liveProjectLink}
                        aria-label="open the live project in new tab"
                        target="_blank"
                    >
                        <Icon color="currentColor" size={'xl'}>
                            <MoveUpRightIcon />
                        </Icon>
                    </Link>
                </Flex>
            )}
        </Box>
    );
};

const projectCardStyles = css({
    aspectRatio: '16/9',
    w: 'full',
    h: 'auto',
    borderRadius: '2xl',
    cursor: 'pointer',
    overflow: 'hidden',
    pos: 'relative'
});

const imageStyles = css({
    width: 'full',
    objectFit: 'cover',
    transform: 'scale(1)',
    transitionProperty: 'transform',
    transitionDuration: 'slow',
    transitionTimingFunction: 'ease-in-out',
    _groupHover: {
        transform: 'scale(1.03)'
    }
});

const overlayStyles = css({
    height: 'fit',
    width: 'fit',
    backgroundColor: 'black.a7',
    borderRadius: 'md',
    position: 'absolute',
    p: '2',
    bottom: '4',
    right: '4',
    transform: 'translateY(200%)',
    transitionProperty: 'all',
    transitionDuration: 'normal',
    transitionTimingFunction: 'ease-in-out',
    _groupHover: {
        transform: 'translateY(0)'
    },
    _hover: {
        color: 'violet.11'
    }
});
