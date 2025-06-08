import { WorkExperience } from '@/sanity/types';
import { FC } from 'react';
import { SanityImage } from '../sanity-image';
import { css } from 'styled-system/css';

export interface OrganizationLogoProps {
    logo: WorkExperience['organizationLogo'];
}

export const OrganizationLogo: FC<OrganizationLogoProps> = ({ logo }) => {
    return logo ? (
        <SanityImage
            className={imageStyles}
            sanityImageSource={logo}
            width={48}
            height={48}
            alt={`organization logo`}
        />
    ) : null;
};

const imageStyles = css({
    filter: 'auto',
    grayscale: 1,
    transitionDuration: 'normal',
    transitionProperty: 'all',
    transitionTimingFunction: 'ease-in-out',
    _hover: { grayscale: 0 }
});
