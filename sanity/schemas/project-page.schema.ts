import { defineField, SchemaTypeDefinition } from 'sanity';

export const projectPageSchema: SchemaTypeDefinition = {
    name: 'projectPage',
    title: 'Project Page',
    description: 'Project page content, mostly to control the sequence on the project page',
    type: 'document',
    fields: [
        defineField({
            name: 'groups',
            title: 'Groups',
            description: 'Project group / category ( work, personal, etc )',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        defineField({
                            name: 'projectGroup',
                            title: 'Project Group',
                            type: 'string'
                        }),
                        defineField({
                            name: 'projects',
                            title: 'Projects',
                            type: 'array',
                            of: [
                                {
                                    type: 'reference',
                                    to: [{ type: 'project' }]
                                }
                            ]
                        })
                    ]
                }
            ]
        }),
        defineField({
            name: 'seo',
            title: 'Seo',
            description: 'To update seo data for home page',
            type: 'seoMetaFields'
        })
    ],
    preview: {
        prepare() {
            return {
                title: 'Project Page'
            };
        }
    }
};
