import { getProjectPageData } from '@/sanity/getters';
import { Projects } from './sections';

export default async function ProjectsPage() {
    const projectGroups = await getProjectPageData();

    return (
        <>
            <Projects projectGroups={projectGroups} />
        </>
    );
}
