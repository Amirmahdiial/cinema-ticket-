import prisma from "@/lib/prisma";

export async function GET(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const movieId = Number((await params).id);
  const movie = await prisma.movie.findUnique({ where: { id: movieId } });
  return Response.json({ response: "success", data: movie });
}
