import { Icon, Section, Text } from '@app/components';
import Link from 'next/link';
import { FC } from 'react';
import { Box } from 'styled-system/jsx';
import ThobLogo from '@app/assets/logos/thob.svg';

export const Work: FC = () => {
    return (
        <Section
            id="work"
            justifyContent={'start'}
            alignItems={'start'}
            maxW={'3xl'}
            mx={'auto'}
            flexDir={'column'}
            scrollMarginTop={'28'}
            mt={'28'}
        >
            <Text as={'h2'} textStyle={'heading'} mb={'16'}>
                work
            </Text>

            <Icon
                width={'10'}
                height={'10'}
                filter={'auto'}
                grayscale={1}
                transitionDuration={'normal'}
                transitionProperty={'all'}
                transitionTimingFunction={'ease-in-out'}
                _hover={{ grayscale: 0 }}
            >
                <ThobLogo viewBox={'0 0 39 42'} />
            </Icon>
            <Box mt={'2'}>
                <Link href="https://thob.studio">
                    <Text as={'h2'} fontSize={{ base: 'xl', md: '3xl' }} fontWeight={'semibold'}>
                        thob.studio
                    </Text>
                </Link>
                <Text as={'p'} fontSize={{ base: 'sm', md: 'md' }} fontWeight={'semibold'}>
                    oct 2022 - jan 2025
                </Text>
            </Box>

            <Box my={'8'}>
                <Text as={'h5'}>full-stack developer</Text>
                <Text as={'h5'}>( startup environment )</Text>
            </Box>

            <Box mb={'8'}>
                <Text
                    as={'h4'}
                    fontSize={{ base: 'lg', md: '2xl' }}
                    fontWeight={'semibold'}
                    mb={'4'}
                >
                    overview
                </Text>
                <Text as={'p'} mb={'2'}>
                    during my time at{' '}
                    <Link style={{ fontWeight: 'bold' }} href="https://thob.studio">
                        thob.studio
                    </Link>
                    , i worked across the stack in a small, fast-paced team. being part of a startup
                    meant getting involved in whatever needed building—from frontend components to
                    backend architecture, devops, and even writing python scripts to support our 3d
                    art pipeline.
                </Text>
                <Text>
                    while i don’t claim mastery over any one domain, this experience gave me the
                    chance to explore how different parts of a system connect. it taught me to be
                    resourceful, pick things up quickly, and appreciate the bigger picture when
                    building software.
                </Text>
            </Box>

            <Box mb={'8'}>
                <Text
                    as={'h4'}
                    fontSize={{ base: 'lg', md: '2xl' }}
                    fontWeight={'semibold'}
                    mb={'4'}
                >
                    what i've worked on
                </Text>

                <Box mb={'3'}>
                    <Text as={'h5'} fontWeight={'medium'} mb={'2'}>
                        front-end
                    </Text>
                    <Text as={'p'}>
                        built user interfaces using react and css-in-js libraries. learned the
                        importance of reusable components and design systems to keep things
                        consistent and scalable.
                    </Text>
                </Box>

                <Box mb={'3'}>
                    <Text as={'h5'} fontWeight={'medium'} mb={'2'}>
                        back-end
                    </Text>
                    <Text as={'p'}>
                        worked with nest.js to build features like multi-authentication systems,
                        applied strategies, rate limiting, and explored cqrs to improve performance
                        and scalability.
                    </Text>
                </Box>

                <Box mb={'3'}>
                    <Text as={'h5'} fontWeight={'medium'} mb={'2'}>
                        deployment and infrastructure
                    </Text>
                    <Text as={'p'}>
                        used docker to containerize applications and deployed them on digitalocean
                        droplets. managed media assets using digitalocean spaces (s3-compatible).
                    </Text>
                </Box>

                <Box mb={'3'}>
                    <Text as={'h5'} fontWeight={'medium'} mb={'2'}>
                        automation and scripting
                    </Text>
                    <Text as={'p'}>
                        wrote python scripts to support artists working in blender, and automated
                        tasks like moving projects between local and cloud storage—small things that
                        helped make the team’s workflow smoother.
                    </Text>
                </Box>
            </Box>

            <Box>
                <Text
                    as={'h4'}
                    fontSize={{ base: 'lg', md: '2xl' }}
                    fontWeight={'semibold'}
                    mb={'4'}
                >
                    what i took away
                </Text>
                <Text as={'p'}>
                    if there's one thing this experience reinforced, it's that software isn't just
                    about writing code—it's about solving problems, learning constantly, and
                    collaborating with people from different disciplines. i'm still growing, still
                    figuring things out, and always looking for ways to get better—whether
                    it's figuring out how systems scale or just learning how to ask better
                    questions.
                </Text>
            </Box>
        </Section>
    );
};
