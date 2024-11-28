import { Movies } from "@/app/database/movies.data";
import { Box } from "@mui/material";
import Cards from "./Cards";


export default function CardList() {
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