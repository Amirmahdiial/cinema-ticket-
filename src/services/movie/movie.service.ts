import prisma from "lib/prisma";

// This function service return's all movie's object from database

export class MoviesService {
    constructor(){}

    public async getMovies() {
        return await prisma.movie.findMany();
    }
}
