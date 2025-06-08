import { defineField, type SchemaTypeDefinition } from 'sanity';

export const workExperienceSchema: SchemaTypeDefinition = {
    name: 'work',
    title: 'Work Experience',
    type: 'document',
    fields: [
        defineField({
            name: 'organization',
            title: 'Organization',
            description: 'Name of the organization',
            validation: (rule) => rule.required(),
            type: 'string'
        }),
        defineField({
            name: 'organizationLogo',
            title: 'Organization Logo',
            description: 'Logo of the organization ( optional )',
            type: 'image'
        }),
        defineField({
            name: 'startDate',
            title: 'Start Date',
            description: 'Date when you started working',
            validation: (rule) => rule.required(),
            type: 'date'
        }),
        defineField({
            name: 'endDate',
            title: 'End Date',
            description: 'Last working day',
            type: 'date'
        }),
        defineField({
            name: 'role',
            title: 'Role',
            description: 'Your role at the organization',
            type: 'string'
        }),
        defineField({
            name: 'organizationWebsite',
            title: 'Organization Website',
            description: "URL of the organization's website",
            type: 'url'
        }),
        defineField({
            name: 'summary',
            title: 'Summary',
            description: 'Short summary about your time at the organization',
            type: 'array',
            of: [{ type: 'block' }]
        }),
        defineField({
            name: 'description',
            title: 'Description',
            description: 'Detailed description about your work at the organization',
            type: 'array',
            of: [{ type: 'block' }]
        })
    ]
};
