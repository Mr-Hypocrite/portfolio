import { defineField, type SchemaTypeDefinition } from 'sanity';

export const projectSchema: SchemaTypeDefinition = {
    name: 'project',
    title: 'Project',
    type: 'document',
    fields: [
        defineField({
            name: 'projectTitle',
            title: 'Project Title',
            description: 'Name of the project',
            validation: (rule) => rule.required(),
            type: 'string'
        }),
        defineField({
            name: 'pictures',
            title: 'Pictures',
            description: 'Snapshots of the project',
            type: 'array',
            of: [
                {
                    type: 'image'
                }
            ]
        }),
        defineField({
            name: 'technologies',
            title: 'Technologies',
            description: 'Tools and technologies used in the project',
            type: 'array',
            of: [
                {
                    type: 'reference',
                    to: [{ type: 'technology' }]
                }
            ]
        }),
        defineField({
            name: 'projectLink',
            title: 'Project Link',
            description: 'Live project link',
            type: 'url'
        }),
        defineField({
            name: 'projectRepo',
            title: 'Project Repo',
            description: 'Project repo link',
            type: 'url'
        }),
        defineField({
            name: 'figmaPrototype',
            title: 'Figma Prototype',
            description: 'Figma prototype link',
            type: 'url'
        }),
        defineField({
            name: 'summary',
            title: 'Summary',
            description: 'Short summary about the project',
            type: 'array',
            of: [{ type: 'block' }]
        }),
        defineField({
            name: 'description',
            title: 'Description',
            description: 'Detailed description about the project',
            type: 'array',
            of: [{ type: 'block' }]
        })
    ]
};
