import { FC } from 'react';
import * as react from 'react';
import theme from "@/theme";
import { Box, Button, Card, CardContent, CardMedia, Typography } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Movies } from '@/app/database/movies.data';
import Link from 'next/link';
type CardsType ={
    title: string;
    director: string;
    rating:number;
    genre:string;
    desc:string;
    id: string;
}

type Ownprops = {
    data: CardsType
}



const Cards: FC<Ownprops> = (data) => {
// const Movie =data.data.genre;
  return (
    <>
      <Card
        sx={{
          display: "flex",
          height: "350px",
          marginTop: "20px",
          borderRadius: "20px",
          position: "relative",
        }}
      >
        <CardMedia
          component="img"
          sx={{
            width: "100%",
            position: "relative",
            backgroundColor: "rgba(0,0,0,0.5)",
          }}
          image="/Images/e478466bd7526046868013a1f7d51eb6.webp"
          alt="Live from space album cover"
        />
        <Box
          sx={{
            backgroundColor: "rgba(0,0,0,0.5)",
            width: "100%",
            position: "absolute",
            height: "100%",
          }}
        ></Box>
        <CardMedia
          component="img"
          sx={{ width: "24%", marginLeft: "20px", position: "absolute" }}
          image="/Images/f46a31eb308bacddd10a31795b8f7735.webp"
          alt="Live from space album cover"
        />
        <CardMedia
          component="img"
          sx={{
            width: "17%",
            marginLeft: "20px",
            position: "absolute",
            right: "20px",
            height: "90%",
            top: "5%",
            borderRadius: "20px",
          }}
          image="/Images/51e6de901eb9ec02e22e24f7f99c877d.webp"
          alt="Live from space album cover"
        />
        <Box
          sx={{
            position: "absolute",
            right: "20%",
            top: "10%",
            width: "400px",
          }}
        >
          <Typography
            component="div"
            variant="h5"
            sx={{
              color: "white",
              fontSize: "40px",
              fontWeight: "600",
              position: "absolute",
              right: "0px",
            }}
          >
            {data.data.title }
          </Typography>
          <Typography
            component="div"
            variant="h5"
            sx={{
              color: "white",
              right: "0",
              position: "absolute",
              top: "80px",
              fontSize: "18px",
            }}
          >
        کارگردان:  {data.data.director}
          </Typography>
          <Typography
            component="div"
            variant="h5"
            sx={{
              color: "white",
              right: "0",
              position: "absolute",
              top: "120px",
              fontSize: "15px",
              display: "flex",
              alignItems: "center",
              backgroundColor: "rgba(200,0,0,.4)",
              borderRadius: "50%",
              padding: "5px",
            }}
          >
            {data.data.rating} <FavoriteIcon sx={{ scale: ".8" }} />
          </Typography>
          <Typography
            component="div"
            variant="h5"
            sx={{
              color: "white",
              right: "80px",
              position: "absolute",
              top: "115px",
              fontSize: "18px",
              border: "1px solid ",
              borderRadius: "50%",
              padding: "10px",
            }}
          >
            {data.data.genre}
          </Typography>
          <Typography
            component="div"
            variant="h5"
            sx={{
              color: "white",
              right: "0",
              position: "absolute",
              top: "170px",
              fontSize: "18px",
            }}
          >
            {data.data.desc}
          </Typography>
          <Link href={`/Movies/${data.data.id}`}>
          <Button variant="contained" size="medium" sx={{position:"absolute", right:"0", top:"220px", backgroundColor:"white", color:"black", fontSize:"20px"}}>
          خرید بلیت
        </Button>
          </Link>
        </Box>
      </Card>
    </>
  );
}
export default Cards;