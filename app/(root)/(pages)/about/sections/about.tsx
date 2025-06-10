import { Section, Text } from '@/components';
import Link from 'next/link';
import { FC } from 'react';
import { Flex } from 'styled-system/jsx';

export const About: FC = () => {
    return (
        <Section alignItems={'start'} justifyContent={'start'} flexDirection={'column'}>
            <Text as="h1" textStyle={'heading'} mb={'6'}>
                about
            </Text>

            <Flex direction="column" gap={'4'} maxW="2xl">
                <Text as="p">
                    i might have{' '}
                    <Link href="https://www.psychiatry.org/patients-families/adhd/what-is-adhd#:~:text=Attention%2Ddeficit%2Fhyperactivity%20disorder%20(ADHD)%20is%20one%20of,in%20the%20moment%20without%20thought).">
                        <b>adhd</b>
                    </Link>
                    , i’ve never been diagnosed, but if you read this, you’ll probably understand
                    why i say that.
                </Text>
                <Text as="p">
                    it all started back in 7th grade when i stumbled across something called{' '}
                    <Link href="https://scratch.mit.edu/">
                        <b>scratch</b>
                    </Link>
                    , developed by{' '}
                    <Link href="https://www.mit.edu/">
                        <b>mit</b>
                    </Link>
                    . i spent way too much time on it, building little games just for fun. it was
                    the first time i saw something i made come to life on a screen that hit
                    different.
                </Text>
                <Text as="p">
                    someone saw what i was doing and said, “hey, you should check out{' '}
                    <Link href="https://unity.com/">
                        <b>unity</b>
                    </Link>
                    .” so i did... and immediately got overwhelmed. the jump from{' '}
                    <Link href="https://scratch.mit.edu/">
                        <b>scratch</b>
                    </Link>{' '}
                    to{' '}
                    <Link href="https://unity.com/">
                        <b>unity</b>
                    </Link>{' '}
                    was like going from finger painting to trying to build a spaceship. i was in 8th
                    grade, and for whatever reason, i decided i needed to learn <b>everything</b>{' '}
                    about game development.
                </Text>
                <Text as="p">
                    that somehow led me to <b>3d modeling</b> with{' '}
                    <Link href="https://www.blender.org/">
                        <b>blender</b>
                    </Link>
                    , mainly because it was open source and free. but{' '}
                    <Link href="https://www.blender.org/">
                        <b>blender</b>
                    </Link>{' '}
                    back then? honestly scarier than{' '}
                    <Link href="https://unity.com/">
                        <b>unity</b>
                    </Link>
                    . still, i kept bouncing between{' '}
                    <Link href="https://www.blender.org/">
                        <b>blender</b>
                    </Link>
                    , 3ds max, and{' '}
                    <Link href="https://www.maxon.net/en/zbrush">
                        <b>zbrush</b>
                    </Link>
                    . can’t say i mastered any of them just a lot of poking around, experimenting,
                    and vibing.
                </Text>
                <Text as="p">
                    fast forward to <b>college during covid</b> i started getting into web
                    development. mornings were for{' '}
                    <Link href="https://genshin.hoyoverse.com/en/">
                        <b>genshin impact</b>
                    </Link>{' '}
                    (with online lectures running in the background, naturally), evenings were for
                    learning and building random web stuff, and nights were all about{' '}
                    <Link href="https://playvalorant.com/en-gb/">
                        <b>valorant</b>
                    </Link>
                    . eventually, i got a friend hooked on the game, then he got another, and
                    suddenly i had a <b>crew</b> not just for{' '}
                    <Link href="https://playvalorant.com/en-gb/">
                        <b>valorant</b>
                    </Link>
                    , but for learning and building together. we dived deeper into web dev, worked
                    on projects.
                </Text>
            </Flex>
        </Section>
    );
};
