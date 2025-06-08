import { sanityLoader } from '@/sanity/lib';
import { Project } from '@/sanity/types';
import { Avatar, HoverCard, Text } from '@/components';
import { HoverCardRootProps } from '@ark-ui/react';
import { GithubIcon, LinkedinIcon } from 'lucide-react';
import Link from 'next/link';
import { FC } from 'react';
import { Box, Flex } from 'styled-system/jsx';

export interface CollaboratorsProps {
    collaborators: Project['collaborators'];
}

export const Collaborators: FC<CollaboratorsProps> = ({ collaborators }) => {
    return collaborators ? (
        <Box>
            <Text as="h2" textStyle={'sub-heading'} mb={'4'}>
                collaborators
            </Text>
            <Flex wrap={'wrap'} gap={'4'}>
                {collaborators.map((collaborator) => (
                    <Collaborator key={collaborator._id} collaborator={collaborator} />
                ))}
            </Flex>
        </Box>
    ) : null;
};

interface CollaboratorProps extends HoverCardRootProps {
    collaborator: Project['collaborators'][0];
}

const Collaborator: FC<CollaboratorProps> = ({ collaborator, ...props }) => {
    return (
        <HoverCard.Root {...props}>
            <HoverCard.Trigger>
                <Link href={collaborator.socials.linkedin || collaborator.socials.github || '#'}>
                    <Avatar
                        size={'xl'}
                        src={
                            !!collaborator.avatar
                                ? sanityLoader({ src: collaborator.avatar, width: 48 })
                                : undefined
                        }
                        name={collaborator.name}
                        css={{
                            textTransform: 'lowercase',
                            _hover: {
                                '& .avatar__fallback': {
                                    color: 'violet.11'
                                }
                            }
                        }}
                    />
                </Link>
            </HoverCard.Trigger>
            <HoverCard.Positioner>
                <HoverCard.Content maxW={'lg'} p={'4'} zIndex={'toast'}>
                    <HoverCard.Arrow>
                        <HoverCard.ArrowTip />
                    </HoverCard.Arrow>
                    <Text as="h6" mb={'4'}>
                        {collaborator.name}
                    </Text>
                    <Flex wrap={'wrap'} gap={'4'}>
                        {collaborator.socials.github && (
                            <Link href={collaborator.socials.github || '#'}>
                                <GithubIcon />
                            </Link>
                        )}
                        {collaborator.socials.linkedin && (
                            <Link href={collaborator.socials.linkedin || '#'}>
                                <LinkedinIcon />
                            </Link>
                        )}
                    </Flex>
                </HoverCard.Content>
            </HoverCard.Positioner>
        </HoverCard.Root>
    );
};
