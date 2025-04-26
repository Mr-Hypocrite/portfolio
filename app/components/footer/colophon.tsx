import FigmaLogo from '@app/assets/logos/figma.svg';
import GitHubLogo from '@app/assets/logos/github.svg';
import NextJsLogo from '@app/assets/logos/next-js.svg';
import VercelLogo from '@app/assets/logos/vercel.svg';
import { HoverCardRootProps } from '@ark-ui/react';
import { FC } from 'react';
import { Flex } from 'styled-system/jsx';
import { HoverCard, Text } from '../ui';

export interface ColophonProps extends HoverCardRootProps {}

export const Colophon: FC<ColophonProps> = (props) => {
    return (
        <HoverCard.Root {...props}>
            <HoverCard.Trigger asChild display={{ base: 'none', lg: 'unset' }}>
                <Text className="styled-link" cursor={'pointer'}>
                    colophon
                </Text>
            </HoverCard.Trigger>

            <HoverCard.Positioner>
                <HoverCard.Content maxW={'lg'} p={'8'}>
                    <HoverCard.Arrow>
                        <HoverCard.ArrowTip />
                    </HoverCard.Arrow>
                    <Flex gap={'8'}>
                        <Flex direction={'column'} w={'fit-content'} flex={1} gap={'4'}>
                            <Flex alignItems={'center'} gap={'2'}>
                                <FigmaLogo width={20} height={20} viewBox="0 0 128 128" />
                                <Text>figma for mockup</Text>
                            </Flex>
                            <Flex alignItems={'center'} gap={'2'}>
                                <NextJsLogo width={20} height={20} viewBox="0 0 128 128" />
                                <Text>next.js for code</Text>
                            </Flex>
                            <Flex alignItems={'center'} gap={'2'}>
                                <GitHubLogo width={20} height={20} viewBox="0 0 128 128" />
                                <Text>github for versioning</Text>
                            </Flex>
                            <Flex alignItems={'center'} gap={'2'}>
                                <VercelLogo width={20} height={20} viewBox="0 0 128 128" />
                                <Text>vercel for ci / cd</Text>
                            </Flex>
                        </Flex>
                        <Text flex={1}>Poppins for headers and Inter for body text.</Text>
                    </Flex>
                </HoverCard.Content>
            </HoverCard.Positioner>
        </HoverCard.Root>
    );
};
