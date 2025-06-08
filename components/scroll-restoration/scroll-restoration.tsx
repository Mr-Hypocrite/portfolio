'use client';

import { useScrollRestoration } from '@/hooks';
import { FC } from 'react';

export const ScrollRestoration: FC = () => {
    useScrollRestoration();
    return null;
};
