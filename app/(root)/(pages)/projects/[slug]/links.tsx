import { Button, Text } from '@/components';
import { GithubIcon, MoveUpRightIcon } from 'lucide-react';
import Link from 'next/link';
import { FC } from 'react';
import { Box, Flex } from 'styled-system/jsx';

export interface LinksProps {
    liveProjectLink?: string;
    githubRepoLink?: string;
}

export const Links: FC<LinksProps> = ({ liveProjectLink, githubRepoLink }) => {
    return (
        <Box my={'8'}>
            <Text as="h2" textStyle={'sub-heading'} mb={'4'}>
                links
            </Text>
            <Flex wrap={'wrap'} gap={'4'}>
                {liveProjectLink && (
                    <Link href={liveProjectLink}>
                        <Button variant={'solid'}>
                            live project
                            <MoveUpRightIcon />
                        </Button>
                    </Link>
                )}
                {githubRepoLink && (
                    <Link href={githubRepoLink}>
                        <Button variant={'solid'}>
                            repository
                            <GithubIcon />
                        </Button>
                    </Link>
                )}
            </Flex>
        </Box>
    );
};
