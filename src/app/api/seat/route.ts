import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

interface Seat {
  id: number;
  row: number;
  column: number;
  price: number;
  status: "available" | "taken";
}

//Eg: http://localhost:3000/api/seat?movieId=1&showTimeId=1

export async function GET(request: Request) {
  try {
    // Get query params
    const url = new URL(request.url);
    const movieId = parseInt(url.searchParams.get("movieId") || "");
    const showTimeId = parseInt(url.searchParams.get("showTimeId") || "");

    // Validate query params
    if (isNaN(movieId) || isNaN(showTimeId)) {
      return NextResponse.json(
        { error: "Invalid movieId or showTimeId" },
        { status: 400 },
      );
    }

    // Fetch ShowTime and Saloon by showTimeId
    const showTime = await prisma.showTime.findUnique({
      where: { id: showTimeId }, // This ensures that we are looking up the showtime by its ID
      include: { saloon: { include: { seats: true } } }, // Get saloon and its seats
    });

    if (!showTime || showTime.movieId !== movieId) {
      return NextResponse.json(
        { error: "Showtime or movie not found" },
        { status: 404 },
      );
    }

    const saloon = showTime.saloon;

    // Fetch all booking seats for the given showtime
    const bookedSeats = await prisma.bookingSeat.findMany({
      where: { booking: { showTimeId } },
      select: { seatId: true },
    });

    // Extract booked seat IDs
    const bookedSeatIds = bookedSeats.map((bs) => bs.seatId);

    // Prepare the seat data
    const seatsWithStatus: Seat[] = saloon.seats.map((seat) => ({
      id: seat.id,
      row: seat.row,
      column: seat.column,
      price: seat.price,
      status: bookedSeatIds.includes(seat.id) ? "taken" : "available",
    }));

    // Return seat data with status
    return NextResponse.json(seatsWithStatus);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
