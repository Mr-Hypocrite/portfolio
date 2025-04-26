'use client';
import useScrollPosition from '@react-hook/window-scroll';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FC, useEffect, useState } from 'react';
import { css, cx } from 'styled-system/css';
import { Flex } from 'styled-system/jsx';
import { Text } from '../ui';

export interface HeaderProps {}

export const Header: FC<HeaderProps> = () => {
    const pathname = usePathname();
    const scrollY = useScrollPosition(60) ?? 0;
    const [hasMounted, setHasMounted] = useState<boolean>(false);

    useEffect(() => {
        setHasMounted(true);
    }, []);

    const hasScrolled = hasMounted && scrollY > 100;

    return (
        <Flex
            className={headerStyles}
            backgroundColor={hasScrolled ? 'white.a1' : 'unset'}
            backdropFilter={hasScrolled ? 'auto' : 'unset'}
            backdropBlur={hasScrolled ? 'sm' : 'unset'}
            gap={{ base: '0', md: '8' }}
        >
            {headerLinks.map(({ href, title }, index) => (
                <Link href={href} key={`${title}_${index}`}>
                    <Text className={cx(navLinkStyles, `${pathname === href ? 'active' : ''} `)}>
                        {title}
                    </Text>
                </Link>
            ))}
        </Flex>
    );
};

const headerLinks = [
    {
        title: 'work',
        href: '/'
    },
    {
        title: 'projects',
        href: '/projects'
    },
    {
        title: 'about',
        href: '/about'
    }
];

const navLinkStyles = css({
    px: { base: '3', md: '4' },
    py: '1',
    borderRadius: 'full',
    textStyle: { base: 'sm', md: 'lg' },
    fontWeight: { base: 'medium' },
    '&.active': {
        color: 'violet.11'
    }
});

const headerStyles = css({
    borderRadius: 'full',
    pos: 'fixed',
    top: '4',
    left: 0,
    right: 0,
    w: 'fit',
    mx: 'auto',
    textStyle: 'lg',
    p: '3',
    transitionDuration: 'normal',
    transitionProperty: 'all',
    transitionTimingFunction: 'ease-in-out',
    zIndex: 'sticky'
});
