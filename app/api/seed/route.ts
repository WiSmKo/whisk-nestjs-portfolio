import Technology from "@/models/Technology";
import connectMongo from "@/libs/mongoose";
import { NextResponse } from "next/server";
import Education from "@/models/Education";
import Experience from "@/models/Experience";

export async function GET() {
    try{
        await connectMongo();

        const sampleTechnologies = [
            {name: "Java", description: "A popular enterprise programming language focused on object-oriented design", image: {url: "/images/java.png", alt: "Java logo"}},
            {name: "Spring Boot", description: "A React framework for building server-rendered applications", image: {url: "/images/springboot.png", alt: "Spring Boot logo"}},
            {name: "Temporal", description: "An orchestrator for distributed systems", image: {url: "/images/temporal.png", alt: "Temporal logo"}},
        ]
        const sampleEducation = [
            {school: "Open University", degree: "DipHE", startDate: new Date("2012-09-01"), endDate: new Date("2015-06-30"), description: "DipHe in Computing & IT - Focused on software development and computer science.", image: {url: "/images/ou.png", alt: "Open University logo"}},
        ]

        const sampleExperience = [
            {
                organisation: "PhoenixNAP",
                title: "Software Engineer",
                startDate: new Date("2022-06-20"),
                description: "Working as a software engineer for a company providing cloud-based infrastructure services.",
                employmentType: "full-time"
            },
            {
                organisation: "Colonel Duck",
                title: "Software Developer",
                startDate: new Date("2021-04-01"),
                endDate: new Date("2022-04-01"),
                description: "Working as a software developer at a creative agency.",
                employmentType: "full-time"
            },
            {
                organisation:"edX",
                title: "Teaching Assistant",
                startDate: new Date("2022-12-01"),
                endDate: new Date("2023-03-01"),
                description: "Working on a frontend developer bootcamp to assist the tutor and the aspiring developers.",
                employmentType: "part-time"
            },
            {
                organisation:"Lykkeli",
                title: "Full-Stack Developer",
                roleType: "full-stack",
                startDate: new Date("2022-12-01"),
                endDate: new Date("2023-03-01"),
                description: "Assisting a non-profit organization to develop their website and web application.",
                employmentType: "volunteer"
            }
        ]

        const existingTechnologyCount = await Technology.countDocuments();
        const existingEducationCount = await Education.countDocuments();
        const existingExperienceCount = await Experience.countDocuments();

        let messageString = ``;

        if(existingTechnologyCount !== 0 && existingEducationCount !== 0 && existingExperienceCount !== 0) {
            return NextResponse.json({ message: "DBs already seeded" }, { status: 200 });
        }

        if (existingTechnologyCount === 0) {
            await Technology.insertMany(sampleTechnologies);
            messageString=messageString+"Technologies ";
        }

        if (existingEducationCount === 0) {
            await Education.insertMany(sampleEducation);
            messageString=messageString+"Education ";
        }

        if (existingExperienceCount === 0) {
            await Experience.insertMany(sampleExperience);
            messageString=messageString+"Experience";
        }

        return NextResponse.json({ message: `Seeded ${ messageString }` }, { status: 200 });

    } catch (e) {
        return NextResponse.json({ error: e.message }, { status: 500 });
    }
}