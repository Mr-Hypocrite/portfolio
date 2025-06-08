import { FC, SVGProps } from 'react';

export interface SvgRendererProps extends SVGProps<SVGElement> {}

export const SvgRenderer: FC<SvgRendererProps> = () => {
    return (
        <svg>
            <use></use>
        </svg>
    );
};
