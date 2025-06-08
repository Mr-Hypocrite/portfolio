import { defineMigration, at, setIfMissing, unset } from 'sanity/migrate';

const changeFields = [
    {
        from: 'projectTitle',
        to: 'title'
    },
    {
        from: 'projectThumbnail',
        to: 'thumbnail'
    },
    {
        from: 'projectLink',
        to: 'liveProjectLink'
    },
    {
        from: 'projectRepo',
        to: 'gitRepoLink'
    }
];

export default defineMigration({
    title: 'project-schema-field-rename',
    documentTypes: ['project'],

    migrate: {
        document(doc, context) {
            return changeFields
                .map((field) => [
                    at(field.to, setIfMissing(doc[field.from])),
                    at(field.from, unset())
                ])
                .flat();
        }
    }
});
