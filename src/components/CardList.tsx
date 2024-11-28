'use client';


import { Movies } from "@/app/database/movies.data";
import axios from "axios";
import { Box } from "@mui/material";
import Cards from "./Cards";
import { useEffect, useState } from "react";


export default function CardList() {
  const[Movies , setMovies] = useState([]);
  const getMovies = async() => {
    axios.get('/api')
    .then(function (response) {
      // handle success
      if(response.data.data){
        setMovies(response.data.data)
      }
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
  }
    useEffect(() =>{
      getMovies();
    }, [] )

    return (
      <>
      <Box>
      {
        Movies.map((item ,index) =>(
          <Cards key={index} data={item}/>
        ))
      }
      </Box>
      </>
    );
  }