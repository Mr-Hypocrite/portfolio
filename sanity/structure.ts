import type { StructureResolver } from 'sanity/structure';

// Define the actions that should be available for singleton documents
const singletonActions = new Set(['publish', 'discardChanges', 'restore']);

// Define the singleton document types
const singletonTypes = new Set(['personalDetails']);

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
    S.list()
        .title('Content')
        .items([
            S.listItem().title('Personal Details').id('personal-details').child(
                // Instead of rendering a list of documents, we render a single
                // document, specifying the `documentId` manually to ensure
                // that we're editing the single instance of the document
                S.editor()
                    .id('personal-details-editor')
                    .schemaType('personalDetails')
                    .documentId('personal-details') // Ensures only one doc
            ),
            // Divider
            S.divider(),
            ...S.documentTypeListItems().filter((listItem) => {
                const id = listItem.getId();
                return id ? !singletonTypes.has(id) : true;
            })
        ]);
