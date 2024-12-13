import * as React from "react";
import Container from "@mui/material/Container";
import Header from "@/components/Header";
import CardList from "@/components/CardList";

export default function Home() {
  return (
    <>
      <link
        href="https://cdn.jsdelivr.net/gh/rastikerdar/vazirmatn@v33.003/Vazirmatn-font-face.css"
        rel="stylesheet"
        type="text/css"
      />
      <Header />
      <Container maxWidth="xl" sx={{ fontFamily: "Vazirmatn" }}>
        <CardList />
      </Container>
    </>
  );
}
