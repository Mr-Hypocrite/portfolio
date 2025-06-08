import type { StructureResolver } from 'sanity/structure';

// Define the singleton document types
const singletonTypes = new Set([
    'personalDetails',
    'projectPage',
    'homePage',
    'aboutPage',
    'workSequence'
]);

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
    S.list()
        .title('Content')
        .items([
            S.listItem().title('Home Page').id('home-page').child(
                // Instead of rendering a list of documents, we render a single
                // document, specifying the `documentId` manually to ensure
                // that we're editing the single instance of the document
                S.editor().id('home-page-editor').schemaType('homePage').documentId('home-page') // Ensures only one doc
            ),
            S.listItem()
                .title('About Page')
                .id('about-page')
                .child(
                    S.editor()
                        .id('about-page-editor')
                        .schemaType('aboutPage')
                        .documentId('about-page')
                ),
            S.listItem()
                .title('Personal Details')
                .id('personal-details')
                .child(
                    S.editor()
                        .id('personal-details-editor')
                        .schemaType('personalDetails')
                        .documentId('personal-details')
                ),
            S.listItem()
                .title('Project Page')
                .id('project-page')
                .child(
                    S.editor()
                        .id('personal-page-editor')
                        .schemaType('projectPage')
                        .documentId('project-page')
                ),
            S.listItem()
                .title('Work Sequence')
                .id('work-sequence')
                .child(
                    S.editor()
                        .id('work-sequence-editor')
                        .schemaType('workSequence')
                        .documentId('work-sequence')
                ),
            // Divider
            S.divider(),
            ...S.documentTypeListItems().filter((listItem) => {
                const id = listItem.getId();
                return id ? !singletonTypes.has(id) : true;
            })
        ]);
