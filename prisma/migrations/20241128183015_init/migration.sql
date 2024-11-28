-- CreateTable
CREATE TABLE "Movie" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "director" TEXT NOT NULL,
    "genre" TEXT NOT NULL,
    "rate" TEXT NOT NULL,
    "background_image" TEXT NOT NULL,
    "actor_image" TEXT NOT NULL,
    "card_image" TEXT NOT NULL
);
