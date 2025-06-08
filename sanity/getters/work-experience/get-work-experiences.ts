import { client } from '@/sanity/lib';
import { WorkExperiences } from '@/sanity/types';
import { groq } from 'next-sanity';

export const getWorkExperiences = async (): Promise<WorkExperiences> => {
    try {
        const workExperiences = await client.fetch(
            groq`
                *[_id == "work-sequence"] [0] {
                    experiences [] -> {
                        _id,
                        organization,
                        organizationLogo,
                        organizationWebsite,
                        startDate,
                        endDate,
                        role,
                        description
                    }
                }
            `
        );

        return workExperiences;
    } catch (error) {
        console.error('failed to fetch work experiences data:', error);
        throw new Error('failed to fetch work experiences data');
    }
};
