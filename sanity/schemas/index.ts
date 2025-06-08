import { aboutPageSchema } from './about-page.schema';
import { collaboratorSchema } from './collaborator.schema';
import { personalDetailsSchema } from './personal-details.schema';
import { projectPageSchema } from './project-page.schema';
import { projectSchema } from './project.schema';
import { technologySchema } from './technology.schema';
import { workExperienceSequenceSchema } from './work-experience-sequence.schema';
import { workExperienceSchema } from './work-experience.schema';

export const schemaTypes = [
    aboutPageSchema,
    personalDetailsSchema,
    projectPageSchema,
    workExperienceSchema,
    workExperienceSequenceSchema,
    projectSchema,
    technologySchema,
    collaboratorSchema
];
