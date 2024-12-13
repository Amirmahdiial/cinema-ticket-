const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  // Create Movies
  const movieA = await prisma.movie.create({
    data: {
      name: "Movie A",
      description: "Description for Movie A",
      director: "Director A",
      genre: "Action",
      thumbnail: "thumbnail-a.jpg",
      coverPhoto: "cover-a.jpg",
    },
  });

  const movieB = await prisma.movie.create({
    data: {
      name: "Movie B",
      description: "Description for Movie B",
      director: "Director B",
      genre: "Drama",
      thumbnail: "thumbnail-b.jpg",
      coverPhoto: "cover-b.jpg",
    },
  });

  // Create Saloons
  const saloonA = await prisma.saloon.create({
    data: {
      name: "Saloon A",
      rows: 10,
      columns: 12,
      seats: {
        create: generateSeats(10, 12, [200, 800]),
      },
    },
  });

  const saloonB = await prisma.saloon.create({
    data: {
      name: "Saloon B",
      rows: 10,
      columns: 12,
      seats: {
        create: generateSeats(10, 12, [200, 800]),
      },
    },
  });

  // Create ShowTimes
  const showTime1030 = await prisma.showTime.create({
    data: {
      time: "10:30 A.M.",
      movieId: movieA.id,
      saloonId: saloonB.id,
    },
  });

  const showTime1330 = await prisma.showTime.create({
    data: {
      time: "13:30 P.M.",
      movieId: movieB.id,
      saloonId: saloonA.id,
    },
  });

  // Create a User Booking for Movie A in Saloon B at 10:30
  const booking = await prisma.booking.create({
    data: {
      userId: 1,
      showTimeId: showTime1030.id,
      movieId: movieA.id,
      createdAt: new Date(),
    },
  });

  // Link Seats to the Booking via BookingSeat
  const seatsToBook = await prisma.seat.findMany({
    where: {
      saloonId: saloonB.id,
      OR: [
        { row: 1, column: 1 },
        { row: 1, column: 2 },
        { row: 1, column: 3 },
      ],
    },
  });

  for (const seat of seatsToBook) {
    await prisma.bookingSeat.create({
      data: {
        bookingId: booking.id,
        seatId: seat.id,
      },
    });
  }

  console.log("Seeding completed!");
}

// Helper function to generate seats
function generateSeats(
  rows: number,
  columns: number,
  prices: number[],
): { row: number; column: number; price: number }[] {
  const seats = [];
  for (let row = 1; row <= rows; row++) {
    for (let column = 1; column <= columns; column++) {
      seats.push({
        row,
        column,
        price: prices[Math.floor(Math.random() * prices.length)],
      });
    }
  }
  return seats;
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

/*const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
    const movieCards = [
        {
        title: "باغ کیانوش",
        description: "فیلم باغ کیانوش به کارگردانی رضا کشاورزحداد و تهیه‌کنندگی محمدجواد ...",
        director: "رضا کشاورز",
        genre: "ماجراجویی",
        rate: "4.0",
        background_image: "/Images/1/e478466bd7526046868013a1f7d51eb6.webp",
        actor_image: "/Images/1/f46a31eb308bacddd10a31795b8f7735.webp",
        card_image: "/Images/1/51e6de901eb9ec02e22e24f7f99c877d.webp"
    },
    {
        title: "صبحانه با زرافه ها",
        description: "فیلم صبحانه با زرافه‌ها به کارگردانی سروش صحت و تهیه‌کنندگی ...",
        director: "سروش صحت",
        genre: "کمدی",
        rate: "3.5",
        background_image: "/Images/2/0ddea1465973a57f9207a4035fa3ee1e.webp",
        actor_image: "/Images/2/15646132ed93d9b320f45da374f9c9d0.webp",
        card_image: "/Images/2/8530dc93a41d1fb4688e150e72bec750.webp"
    },
    {
        title: "زود پز",
        description: "فیلم زودپز به کارگردانی رامبد جوان و تهیه‌کنندگی منصور سهراب‌پور ...",
        director: "رامبد جوان",
        genre: "کمدی",
        rate: "3.6",
        background_image: "/Images/3/1ba7dd6370c8c20de58591ae545e2eaa.webp",
        actor_image: "/Images/3/542f5e14e0f6a5b0197d5817a81ff779.webp",
        card_image: "/Images/3/f003a8a90b15d78fb64c179e89d14336.webp"
    },
];

console.log("Seeding movie cards...");
for (const movie of movieCards) {    
    await prisma.Movie.create({
        data: movie,
    });
}
console.log("Seeding completed!");
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
*/
