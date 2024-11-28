import prisma from "lib/prisma";
import { NextResponse } from "next/server";


// This function service return's all movie's object from database
const getMovies = async () => {
    return await prisma.movie.findMany();
};


// This api return's all movie's object from getMovies service
export async function GET() {
    return NextResponse.json(
        {
            "response": "sucess",
            "data": await getMovies()
        }
    )
}
