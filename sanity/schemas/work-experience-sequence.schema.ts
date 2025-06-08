import { defineField, type SchemaTypeDefinition } from 'sanity';

export const workExperienceSequenceSchema: SchemaTypeDefinition = {
    name: 'workSequence',
    title: 'Work Experience Sequence',
    type: 'document',
    fields: [
        defineField({
            name: 'experiences',
            title: 'Experiences',
            description: 'Past work experiences',
            type: 'array',
            of: [
                {
                    type: 'reference',
                    to: [{ type: 'work' }]
                }
            ]
        })
    ],
    preview: {
        prepare() {
            return {
                title: 'Work Experience Sequence'
            };
        }
    }
};
