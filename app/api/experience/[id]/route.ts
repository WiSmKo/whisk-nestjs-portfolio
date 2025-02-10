import Experience from "@/models/Experience";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET(req: Request, { params }: { params: { id: string } }) {
    const { id } = params;
  
    // Validate the ID format
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json({ message: 'Invalid ObjectId format' }, { status: 400 });
    }
  
    try {
      // Fetch the experience by ID
      const experience = await Experience.findById(new mongoose.Types.ObjectId(id));
  
      // If not found, return a 404
      if (!experience) {
        return NextResponse.json({ message: 'Experience not found' }, { status: 404 });
      }
  
      // Return the found experience
      return NextResponse.json(experience, { status: 200 });
    } catch (error) {
      console.error('Error fetching experience by ID:', error);
      return NextResponse.json({ message: 'Error fetching experience' }, { status: 500 });
    }
  }