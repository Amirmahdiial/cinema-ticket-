import Header from "@/components/Header";
import { Container, Typography } from "@mui/material";

import { Movies } from "@/app/database/movies.data";
import { useParams } from "next/navigation";
    export default function About() {
        // const param =useParams();
        // const movieId =param?.id;
        // const movieDetails =Movies?.find((item) => item.id == movieId)
    return (
      <>
        {/* <Header /> */}
      <Container maxWidth="xl">
        {/* <Typography >{movieDetails?.title}</Typography> */}
      </Container>
      </>
    );
  }