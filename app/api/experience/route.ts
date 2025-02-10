import connectMongo from "@/libs/mongoose";
import Experience from "@/models/Experience";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    const url = new URL(req.url);
    const searchParams = url.searchParams;
    try {
        await connectMongo();
        const query: any = {};
        if (searchParams.has("type")) {
            query.type = searchParams.get("type");
        
        }
        if (searchParams.has("current") && searchParams.get("current") === "true") {
            query.endDate = { $exists: false };
        }
        if (searchParams.has("current") && searchParams.get("current") === "false") {
            query.endDate = { $exists: true };
        }


        const experienceList = await Experience.find(query);
        return NextResponse.json(experienceList);

    } catch (e) {
          return NextResponse.json({ error: "Internal Server Error"+e }, { status: 500 });
    }

}