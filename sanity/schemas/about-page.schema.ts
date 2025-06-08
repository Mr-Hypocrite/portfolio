import { defineField, SchemaTypeDefinition } from 'sanity';

export const aboutPageSchema: SchemaTypeDefinition = {
    name: 'aboutPage',
    title: 'About Page',
    type: 'document',
    fields: [
        defineField({
            name: 'seo',
            title: 'Seo',
            description: 'To update seo data for about page',
            type: 'seoMetaFields'
        })
    ],
    preview: {
        prepare() {
            return {
                title: 'About Page'
            };
        }
    }
};
