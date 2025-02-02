import { Suspense } from 'react'
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Footer from "@/components/Footer";
import TechnologiesAccordion from '@/components/TechnologiesAccordion';
import Technology,{ ITechnology } from '@/models/Technology';
import connectMongo from '@/libs/mongoose';

interface PageProps {
  technologies: ITechnology[];
}


export default async function Home() {
  await connectMongo();
  const technologies: ITechnology[] = await Technology.find({});

  return (
    <>
      <Suspense>
        <Header />
      </Suspense>
      <main>
        <Hero />
        <Problem />
        <TechnologiesAccordion technologies={technologies} />
      </main>
      <Footer />
    </>
  );
}