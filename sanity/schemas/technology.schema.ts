import { defineField, type SchemaTypeDefinition } from 'sanity';

export const technologySchema: SchemaTypeDefinition = {
    name: 'technology',
    title: 'Technology',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Name',
            description: 'Name of the tool or technology',
            type: 'string'
        }),
        defineField({
            name: 'link',
            title: 'Link',
            description: 'Link to website or github repo',
            type: 'url'
        }),
        defineField({
            name: 'logo',
            title: 'Logo',
            description: 'Preferrably an svg logo',
            type: 'image'
        })
    ]
};
