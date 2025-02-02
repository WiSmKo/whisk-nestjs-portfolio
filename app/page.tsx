import { Suspense } from 'react'
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import Footer from "@/components/Footer";
import TechnologiesAccordion from '@/components/TechnologiesAccordion';
import Technology,{ ITechnology } from '@/models/Technology';
import connectMongo from '@/libs/mongoose';
import CV from '@/components/CV';
import Education, { IEducation } from '@/models/Education';
import Experience, { IExperience } from '@/models/Experience';

interface PageProps {
  technologies: ITechnology[];
  experience: IExperience[];
  education: IEducation[];
}


export default async function Home() {
  await connectMongo();
  const technologies: ITechnology[] = await Technology.find().lean();
  const education: IEducation[] = await Education.find().lean();
  const experience: IExperience[] = await Experience.find().lean();

  return (
    <>
      <Suspense>
        <Header />
      </Suspense>
      <main>
        <Hero />
        <Intro />
        <CV education={education} experience={experience}/>
        <TechnologiesAccordion technologies={technologies} />
      </main>
      <Footer />
    </>
  );
}