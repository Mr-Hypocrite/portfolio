import { Project } from '@/sanity/types';
import { PortableText } from 'next-sanity';
import { Components } from '@/components';
import { FC } from 'react';

export interface DescriptionProps {
    description: Project['description'];
}

export const Description: FC<DescriptionProps> = ({ description }) => {
    return <PortableText value={description} components={Components} />;
};
