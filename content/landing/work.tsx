import { WorkExperiences } from '@/sanity/types';
import {
    ExperienceDescription,
    OrganizationLogo,
    OrganizationName,
    Section,
    Text,
    WorkDuration
} from '@/components';
import { FC } from 'react';
import { Box } from 'styled-system/jsx';

interface WorkProps {
    experiences: WorkExperiences['experiences'];
}

export const Work: FC<WorkProps> = ({ experiences }) => {
    return experiences ? (
        <Section
            id="work"
            justifyContent={'start'}
            alignItems={'start'}
            maxW={'2xl'}
            mr={'auto'}
            flexDir={'column'}
            scrollMarginTop={'28'}
        >
            <Text as={'h2'} textStyle={'heading'} mb={'8'}>
                work
            </Text>

            {experiences.map((experience) => (
                <Box key={experience._id} mb={'16'}>
                    <OrganizationLogo logo={experience.organizationLogo} />
                    <Box mt={'4'}>
                        <OrganizationName
                            name={experience.organization}
                            siteURL={experience.organizationWebsite}
                        />
                        <WorkDuration
                            startDate={experience.startDate}
                            endDate={experience.endDate}
                        />
                    </Box>
                    <Box mt={'8'}>
                        <ExperienceDescription description={experience.description} />
                    </Box>
                </Box>
            ))}
        </Section>
    ) : null;
};
