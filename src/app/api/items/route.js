import path from "path";
import { promises as fs } from "fs";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    // Get the directory where the JSON file is located
    const jsonDirectory = path.join(process.cwd(), "data");

    // Read the contents of the JSON file
    const filePath = path.join(jsonDirectory, "items.json");
    const fileContents = await fs.readFile(filePath, "utf8");

    // Parse and return the JSON content
    return NextResponse.json(JSON.parse(fileContents));
  } catch (error) {
    // Handle potential errors, such as file not found or JSON parsing errors
    return NextResponse.json({ error: "Failed to load data" }, { status: 500 });
  }
}
