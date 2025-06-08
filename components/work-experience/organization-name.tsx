import { WorkExperience } from '@/sanity/types';
import Link from 'next/link';
import { FC } from 'react';
import { Text } from '../ui';

export interface OrganizationNameProps {
    name: WorkExperience['organization'];
    siteURL?: WorkExperience['organizationWebsite'];
}

export const OrganizationName: FC<OrganizationNameProps> = ({ siteURL, name }) => {
    return siteURL ? (
        <Link href={siteURL}>
            <Text as={'h2'} fontSize={{ base: 'xl', md: '3xl' }} fontWeight={'semibold'}>
                {name}
            </Text>
        </Link>
    ) : (
        <Text as={'h2'} fontSize={{ base: 'xl', md: '3xl' }} fontWeight={'semibold'}>
            {name}
        </Text>
    );
};
