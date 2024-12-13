import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

interface BookingRequest {
  userId: number;
  movieId: number;
  showTimeId: number;
  seats: number[];
}

/*
*  Body eg)
* {
  "userId": 1,
  "movieId": 1,
  "showTimeId": 1,
  "seats": [175, 176, 177]
}

* */

export async function POST(request: Request) {
  try {
    const body: BookingRequest = await request.json();

    const { userId, movieId, showTimeId, seats } = body;

    // Validate input
    if (
      !userId ||
      !movieId ||
      !showTimeId ||
      !Array.isArray(seats) ||
      seats.length === 0
    ) {
      return NextResponse.json({ error: "Invalid input" }, { status: 400 });
    }

    // Fetch the showtime to validate if it's correct
    const showTime = await prisma.showTime.findUnique({
      where: { id: showTimeId },
      include: {
        movie: true,
        saloon: {
          include: {
            seats: true,
          },
        },
      },
    });

    if (!showTime) {
      return NextResponse.json(
        { error: "Showtime not found" },
        { status: 404 },
      );
    }

    // Check if the movieId matches the movie associated with the showtime
    if (showTime.movieId !== movieId) {
      return NextResponse.json(
        { error: "Movie ID does not match the showtime movie" },
        { status: 400 },
      );
    }

    // Fetch the booked seats for this showtime
    const bookedSeats = await prisma.bookingSeat.findMany({
      where: { booking: { showTimeId } },
      select: { seatId: true },
    });

    // Get the list of already booked seat IDs
    const bookedSeatIds = bookedSeats.map((bs) => bs.seatId);

    // Check if any of the selected seats are already booked
    const unavailableSeats = seats.filter((seatId) =>
      bookedSeatIds.includes(seatId),
    );

    if (unavailableSeats.length > 0) {
      return NextResponse.json(
        { error: `Seats ${unavailableSeats.join(", ")} are already taken` },
        { status: 400 },
      );
    }

    // Check if the selected seats exist in the saloon
    const validSeats = showTime.saloon.seats.filter((seat) =>
      seats.includes(seat.id),
    );
    if (validSeats.length !== seats.length) {
      return NextResponse.json(
        { error: "One or more seats are invalid" },
        { status: 400 },
      );
    }

    // Create a new booking
    const booking = await prisma.booking.create({
      data: {
        userId,
        showTimeId,
        movieId,
        bookingSeats: {
          create: validSeats.map((seat) => ({
            seatId: seat.id,
          })),
        },
      },
    });

    // Return the booking details
    return NextResponse.json({
      message: "Booking successful",
      bookingId: booking.id,
      seats: validSeats,
    });
  } catch (error) {
    console.error("Booking error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
