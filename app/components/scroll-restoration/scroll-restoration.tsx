'use client';

import { useScrollRestoration } from '@app/hooks';
import { FC } from 'react';

export const ScrollRestoration: FC = () => {
    useScrollRestoration();
    return null;
};
