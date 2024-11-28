import { MoviesService } from "@/services/movie/movie.service";
import { NextResponse } from "next/server";

const moviesService = new MoviesService();


// This api return's all movie's object from getMovies service
export async function GET() {
    return NextResponse.json(
        {
            "response": "sucess",
            "data": await moviesService.getMovies()
        }
    )
}
