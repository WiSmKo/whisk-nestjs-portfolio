import Technology from "@/models/Technology";
import connectMongo from "@/libs/mongoose";
import { NextResponse } from "next/server";

export async function GET() {
    try{
        await connectMongo();

        const sampleTechnologies = [
            {name: "Java", description: "A popular enterprise programming language focused on object-oriented design", image: {url: "/images/java.png", alt: "Java logo"}},
            {name: "Spring Boot", description: "A React framework for building server-rendered applications", image: {url: "/images/springboot.png", alt: "Spring Boot logo"}},
            {name: "Temporal", description: "An orchestrator for distributed systems", image: {url: "/images/temporal.png", alt: "Temporal logo"}},
        ]
        const existingCount = await Technology.countDocuments();

        if (existingCount === 0) {
            await Technology.insertMany(sampleTechnologies);
            return NextResponse.json({ message: "Technologies seeded successfully" }, { status: 200 });
        } else {
            return NextResponse.json({ message: "Technologies already seeded" }, { status: 200 });
        }

    } catch (e) {
        return NextResponse.json({ error: e.message }, { status: 500 });
    }
}