'use client';

import { ProjectPageData } from '@/sanity/types';
import { Section, Text, ProjectCard } from '@/components';
import { usePathname } from 'next/navigation';
import { FC } from 'react';
import { Box, Grid } from 'styled-system/jsx';

interface ProjectsProps {
    projectGroups: ProjectPageData;
}

export const Projects: FC<ProjectsProps> = ({ projectGroups }) => {
    const pathname = usePathname();

    return (
        <Section alignItems={'start'} justifyContent={'start'} flexDirection={'column'}>
            {projectGroups.groups.map((group) => (
                <Box key={`${group._key}_${group.projectGroup}`} w={'full'} h={'full'}>
                    <Text as="h1" textStyle={'heading'} mb={'6'}>
                        {group.projectGroup}
                    </Text>

                    <Grid
                        w={'full'}
                        gridTemplateColumns={'repeat(4, 1fr)'}
                        gridGap={'8'}
                        mt={{ md: '4' }}
                    >
                        {group.projects.map((project) => (
                            <Box
                                key={project._id}
                                gridColumn={
                                    project.featured
                                        ? { base: '1/-1' }
                                        : { base: '1/-1', lg: 'span 2' }
                                }
                            >
                                {/* TODO: the naming can be improved this can get confusing */}
                                <ProjectCard
                                    {...project}
                                    localProjectLink={`${pathname}/${project.slug}`}
                                />
                            </Box>
                        ))}
                    </Grid>
                </Box>
            ))}
        </Section>
    );
};
