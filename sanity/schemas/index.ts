import { personalDetailsSchema } from './personal-details.schema';
import { workExperienceSchema } from './work-experience.schema';
import { projectPageSchema } from './project-page.schema';
import { projectSchema } from './project.schema';
import { technologySchema } from './technology.schema';

export const schemaTypes = [
    personalDetailsSchema,
    projectPageSchema,
    workExperienceSchema,
    projectSchema,
    technologySchema
];
