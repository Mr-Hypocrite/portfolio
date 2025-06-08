import { defineField, SchemaTypeDefinition } from 'sanity';

export const homePageSchema: SchemaTypeDefinition = {
    name: 'homePage',
    title: 'Home Page',
    type: 'document',
    fields: [
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
                title: 'Home Page'
            };
        }
    }
};
