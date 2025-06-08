import { CircleSmallIcon, FileUserIcon, GithubIcon, LinkedinIcon, MailIcon } from 'lucide-react';
import Link from 'next/link';
import { FC } from 'react';
import { Container, Flex } from 'styled-system/jsx';
import { Icon, Text } from '../ui';
import { Colophon } from './colophon';

export const Footer: FC = () => {
    return (
        <Container mt={{ base: '16', md: '32' }} mb={'8'}>
            <Flex
                direction={{ base: 'column-reverse', sm: 'row' }}
                w={'full'}
                justifyContent={'space-between'}
                gap={{ base: '8' }}
                minH={{ base: '', md: '2xs' }}
                alignItems={{ base: 'start' }}
            >
                <Flex alignItems={'center'} gap={'2'}>
                    <Text>&copy; 2025 jatin</Text>

                    <Icon size={'xs'} display={{ base: 'none', lg: 'unset' }}>
                        <CircleSmallIcon fill="currentColor" />
                    </Icon>
                    <Colophon />
                </Flex>
                <FooterLinks />
            </Flex>
        </Container>
    );
};

const FooterLinks: FC = () => {
    return (
        <Flex direction={{ base: 'row' }} wrap={'wrap'} gap={{ base: '8' }}>
            <Flex direction={'column'} gap={'4'}>
                <Text size={{ base: 'lg' }} fontWeight={'medium'}>
                    elsewhere
                </Text>
                <Flex direction={'column'} gap={'1'}>
                    <Link href="https://github.com/Mr-Hypocrite" target="_blank">
                        <Flex alignItems={'center'} gap={'1'}>
                            <GithubIcon size={20} />
                            <Text>github</Text>
                        </Flex>
                    </Link>
                    <Link href="https://www.linkedin.com/in/jatin-ym/" target="_blank">
                        <Flex alignItems={'center'} gap={'1'}>
                            <LinkedinIcon size={20} />
                            <Text>linkedin</Text>
                        </Flex>
                    </Link>
                </Flex>
            </Flex>
            <Flex direction={'column'} gap={'4'}>
                <Text size={{ base: 'lg' }} fontWeight={'medium'}>
                    contact
                </Text>
                <Flex direction={'column'} gap={'1'}>
                    <Link href="mailto:ym.jatin@gmail.com">
                        <Flex alignItems={'center'} gap={'1'}>
                            <MailIcon size={20} />
                            <Text>ym.jatin@gmail.com</Text>
                        </Flex>
                    </Link>
                    <Link href="mailto:ym.jatin@gmail.com">
                        <Flex alignItems={'center'} gap={'1'}>
                            <FileUserIcon size={20} />
                            <Text>cv</Text>
                        </Flex>
                    </Link>
                </Flex>
            </Flex>
        </Flex>
    );
};
