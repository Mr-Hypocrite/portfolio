'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export const useScrollRestoration = () => {
    const pathname = usePathname();

    useEffect(() => {
        const scrollPositions: Record<string, number> = {};

        const saveScroll = () => {
            scrollPositions[pathname] = window.scrollY;
        };

        const restoreScroll = () => {
            const y = scrollPositions[pathname] || 0;
            window.scrollTo(0, y);
        };

        window.addEventListener('beforeunload', saveScroll);
        restoreScroll();

        return () => {
            window.removeEventListener('beforeunload', saveScroll);
            saveScroll();
        };
    }, [pathname]);
};
