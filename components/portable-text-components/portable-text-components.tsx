import { PortableTextComponents } from 'next-sanity';
import { Text } from '../ui';
import { css } from 'styled-system/css';

export const Components: PortableTextComponents = {
    block: {
        h1: ({ children }) => (
            <Text as="h1" textStyle={'pth1'}>
                {children}
            </Text>
        ),
        h2: ({ children }) => (
            <Text as="h2" textStyle={'pth2'}>
                {children}
            </Text>
        ),
        h3: ({ children }) => (
            <Text as="h3" textStyle={'pth3'}>
                {children}
            </Text>
        ),
        h4: ({ children }) => (
            <Text as="h4" textStyle={'pth4'}>
                {children}
            </Text>
        ),
        h5: ({ children }) => (
            <Text as="h5" textStyle={'pth5'}>
                {children}
            </Text>
        ),
        h6: ({ children }) => (
            <Text as="h6" textStyle={'pth6'}>
                {children}
            </Text>
        ),
        normal: ({ children, value }) => {
            const isEmpty =
                Array.isArray(value?.children) &&
                value.children.every((child) => !child?.text?.trim());

            if (isEmpty) {
                return <br />;
            }

            return (
                <Text as="p" textStyle={'body'}>
                    {children}
                </Text>
            );
        }
    },
    marks: {
        strong: ({ children }) => <strong className={strongTextStyles}>{children}</strong>,
        link: ({ value, children }) => {
            const href = value?.href || '/';
            return (
                <a href={href} className={linkStyles} target="_blank" rel="noopener noreferrer">
                    {children}
                </a>
            );
        }
    },
    list: {
        bullet: ({ children }) => <ul className={listStyles}>{children}</ul>
    },
    listItem: {
        bullet: ({ children }) => <li className={listItemStyles}>{children}</li>
    }
};

const strongTextStyles = css({
    fontWeight: 'semibold'
});

const listStyles = css({
    paddingLeft: '6',
    marginBottom: '4',
    listStyleType: 'disc'
});

const listItemStyles = css({
    marginBottom: '2',
    lineHeight: '1.6'
});
const linkStyles = css({
    fontWeight: 'semibold',
    _hover: {
        color: 'violet.11'
    }
});
