import { defineField, SchemaTypeDefinition } from 'sanity';

export const collaboratorSchema: SchemaTypeDefinition = {
    name: 'collaborator',
    title: 'Collaborator',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Name',
            type: 'string',
            validation: (rule) => rule.required()
        }),
        defineField({
            name: 'avatar',
            title: 'Avatar',
            type: 'image'
        }),
        defineField({
            name: 'socials',
            title: 'Socials',
            type: 'object',
            fields: [
                defineField({
                    name: 'github',
                    title: 'GitHub',
                    type: 'url'
                }),
                defineField({
                    name: 'linkedin',
                    title: 'Linked In',
                    type: 'url'
                })
            ]
        })
    ]
};
