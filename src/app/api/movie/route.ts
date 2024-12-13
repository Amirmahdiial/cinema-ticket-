import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const movies = await prisma.movie.findMany({
    include: {
      showTimes: true, // Include all showTimes for the movies
    },
  });

  // Map movies to include only the showTime associated with the movie
  const moviesWithSpecificShowTime = movies.map(movie => {
    const specificShowTime = movie.showTimes.find(showTime => showTime.movieId === movie.id);
    return {
      ...movie,
      showTimes: specificShowTime ? [specificShowTime] : [],
    };
  });

  return NextResponse.json({ response: "success", data: moviesWithSpecificShowTime });
}