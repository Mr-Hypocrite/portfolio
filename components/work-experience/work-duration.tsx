import { WorkExperience } from '@/sanity/types';
import { FC } from 'react';
import { Text } from '../ui';

export interface WorkDurationProps {
    startDate: WorkExperience['startDate'];
    endDate: WorkExperience['endDate'];
}

export const WorkDuration: FC<WorkDurationProps> = ({ startDate, endDate }) => {
    const _startDate = new Date(startDate).toLocaleDateString('en-IN', {
        year: 'numeric',
        month: 'short'
    });
    const _endDate = new Date(endDate).toLocaleDateString('en-IN', {
        year: 'numeric',
        month: 'short'
    });

    return (
        <Text
            as={'p'}
            fontSize={{ base: 'sm', md: 'md' }}
            fontWeight={'semibold'}
            textTransform={'lowercase'}
        >
            {`${_startDate} - ${_endDate}`}
        </Text>
    );
};
