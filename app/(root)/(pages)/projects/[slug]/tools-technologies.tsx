import { Project } from '@/sanity/types';
import { SanityImage, Text } from '@/components';
import Link from 'next/link';
import { FC } from 'react';
import { Box, Flex } from 'styled-system/jsx';

export interface ToolsTechnologiesProps {
    technologies: Project['technologies'];
}

export const ToolsTechnologies: FC<ToolsTechnologiesProps> = ({ technologies }) => {
    const filteredTechnologies = technologies?.filter((technology) => !!technology.link);

    return filteredTechnologies ? (
        <Box my={'8'}>
            <Text as="h2" textStyle={'sub-heading'} mb={'4'}>
                tools | technologies
            </Text>
            <Flex wrap={'wrap'} gap={'4'}>
                {filteredTechnologies.map(({ _id, name, logo, link }) => (
                    <Link key={_id} href={link} aria-label={`read more about ${name}`}>
                        <Flex direction={'column'} wrap={'wrap'}>
                            <Box pos={'relative'} w={'8'} aspectRatio={'1/1'}>
                                <SanityImage
                                    fill
                                    sanityImageSource={logo}
                                    sizes="32px"
                                    alt="technology-logo"
                                />
                            </Box>
                        </Flex>
                    </Link>
                ))}
            </Flex>
        </Box>
    ) : null;
};
