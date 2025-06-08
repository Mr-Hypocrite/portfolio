import { getWorkExperiences } from '@/sanity/getters';
import { Intro, Work } from '@/content';

export default async function Home() {
    const workExperiences = await getWorkExperiences();

    return (
        <>
            <Intro />
            <Work experiences={workExperiences?.experiences} />
        </>
    );
}
