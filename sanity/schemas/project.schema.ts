import { defineField, type SchemaTypeDefinition } from 'sanity';

export const projectSchema: SchemaTypeDefinition = {
    name: 'project',
    title: 'Project',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            description: 'Name / title of the project',
            validation: (rule) => rule.required(),
            type: 'string'
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            description: 'Project slug which will be used on the site.',
            validation: (rule) => rule.required(),
            type: 'slug',
            options: {
                source: 'title',
                slugify: (input) =>
                    input
                        .toLowerCase()
                        .trim()
                        .replace(/['"]/g, '') // Remove single and double quotes
                        .replace(/[^a-z0-9\s-]/g, '') // Remove other non-url-safe characters
                        .replace(/\s+/g, '-') // Replace spaces with dashes
                        .replace(/-+/g, '-') // Collapse multiple dashes
                        .replace(/^-+|-+$/g, '')
                        .slice(0, 200)
            }
        }),
        defineField({
            name: 'thumbnail',
            title: 'Thumbnail',
            description: 'Thumbnail image for the project',
            validation: (rule) => rule.required(),
            type: 'image'
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
            name: 'collaborators',
            title: 'Collaborators',
            description: 'People who were involved in the project.',
            type: 'array',
            of: [
                {
                    type: 'reference',
                    to: [{ type: 'collaborator' }]
                }
            ]
        }),
        defineField({
            name: 'liveProjectLink',
            title: 'Live Project Link',
            type: 'url'
        }),
        defineField({
            name: 'gitRepoLink',
            title: 'Git Repo Link',
            type: 'url'
        }),
        defineField({
            name: 'figmaPrototype',
            title: 'Figma Prototype',
            description: 'Figma prototype link',
            type: 'object',
            fields: [
                defineField({
                    name: 'mobile',
                    title: 'Mobile Prototype',
                    type: 'url'
                }),
                defineField({
                    name: 'desktop',
                    title: 'Desktop Prototype',
                    type: 'url'
                })
            ]
        }),
        defineField({
            name: 'featured',
            title: 'Featured',
            description: 'This will affect the way it shows on the project page on the frontend',
            type: 'boolean'
        }),
        defineField({
            name: 'isArchived',
            title: 'Is Archived',
            description: 'To hide the project on the frontend without deleting the data.',
            type: 'boolean'
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
        }),
        defineField({
            name: 'seo',
            title: 'Seo',
            description: 'To update seo data for home page',
            type: 'seoMetaFields'
        })
    ]
};
