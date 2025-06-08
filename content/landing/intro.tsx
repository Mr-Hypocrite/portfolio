import { Icon, Section, Text } from '@/components';
import { ChevronDownIcon } from 'lucide-react';
import Link from 'next/link';
import { FC } from 'react';
import { Flex } from 'styled-system/jsx';

export const Intro: FC = () => {
    return (
        <Section
            css={{
                minH: '100vh',
                '&': {
                    minH: '100dvh'
                }
            }}
            id="home"
            flexDir={'column'}
            textAlign={'center'}
            position={'relative'}
            transform={'translateY(calc(var(--spacing-24) * -1))'}
        >
            <Text as={'h2'} textStyle={'heading'}>
                {`hi. i'm jatin.`}
            </Text>
            <Text as={'h2'} textStyle={'heading'} lineHeight={'none'}>
                a {`<web />`} developer.
            </Text>
            <Text textStyle={'sub-heading'} mt={'8'}>
                on a journey to build better web experiences.
            </Text>

            <Link href="/#work">
                <Flex
                    alignItems={'center'}
                    direction={'column'}
                    position={'absolute'}
                    bottom={'16'}
                    left={'0'}
                    right={'0'}
                    mx={'auto'}
                    w={'fit'}
                >
                    <Text textStyle={'sub-heading'}>work</Text>
                    <Icon size={'2xl'}>
                        <ChevronDownIcon />
                    </Icon>
                </Flex>
            </Link>
        </Section>
    );
};
