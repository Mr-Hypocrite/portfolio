import { type SchemaTypeDefinition } from 'sanity';

export const personalDetailsSchema: SchemaTypeDefinition = {
    name: 'personalDetails',
    title: 'Perosonal Details',
    type: 'document',
    fields: [
        {
            name: 'cv',
            title: 'CV',
            type: 'file'
        }
    ],
    preview: {
        prepare() {
            return {
                title: 'Personal Details'
            };
        }
    }
};
