import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import NextLink from "next/link";
import ProTip from "@/components/ProTip";
import Copyright from "@/components/Copyright";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import TextField from "@mui/material/TextField";
import AppBar from "@mui/material/AppBar";
import SearchIcon from "@mui/icons-material/Search";
import LoginIcon from "@mui/icons-material/Login";
import TicketIcon from "@mui/icons-material/ConfirmationNumber";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Header from "@/components/Header";
import Cards from "@/components/Cards";
import shadows from "@mui/material/styles/shadows";
import { Movies } from "./database/movies.data";
import CardList from "@/components/CardList";

export default function Home() {
  return (
    <>
     <link href="https://cdn.jsdelivr.net/gh/rastikerdar/vazirmatn@v33.003/Vazirmatn-font-face.css" rel="stylesheet" type="text/css" />
      <Header />
      <Container maxWidth="xl" sx={{fontFamily:"Vazirmatn"}}>
        <CardList />
      </Container>
    </>
  );
}
