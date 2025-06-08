import { WorkExperience } from '@/sanity/types';
import { PortableText } from 'next-sanity';
import { FC } from 'react';
import { Components } from '../portable-text-components';

export interface ExperienceDescriptionProps {
    description: WorkExperience['description'];
}

export const ExperienceDescription: FC<ExperienceDescriptionProps> = ({ description }) => {
    return <PortableText value={description} components={Components} />;
};
