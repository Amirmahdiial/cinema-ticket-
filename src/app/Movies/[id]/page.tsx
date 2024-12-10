"use client";

import { Box, Container, Typography, CardMedia, Button } from "@mui/material";

import { useState } from "react";
import Seat from "@/components/seat";
import { ISeat } from "@/lib/types/types";

export default function ticket() {
  const [seats, setSeats] = useState<ISeat[]>([
    { colNumber: "1", rowNumber: "1", price: 200, isReserved: false },
    { colNumber: "2", rowNumber: "1", price: 200, isReserved: false },
    { colNumber: "3", rowNumber: "1", price: 200, isReserved: true },
    { colNumber: "4", rowNumber: "1", price: 200, isReserved: false },
    { colNumber: "5", rowNumber: "1", price: 200, isReserved: true },
    { colNumber: "6", rowNumber: "1", price: 200, isReserved: false },
  ]);

  const [selectedSeats, setSelectedSeats] = useState<ISeat[]>([]);

  function addSeatToSelectedSeats(seat: ISeat) {
    setSelectedSeats([...selectedSeats, seat]);
  }

  function removeSeatFromSelectedSeats(colNumber: string, rowNumber: string) {
    setSelectedSeats(
      selectedSeats.filter((s) => {
        return s.colNumber !== colNumber || s.rowNumber !== rowNumber;
      }),
    );
  }

  return (
    <>
      <link
        href="https://cdn.jsdelivr.net/gh/rastikerdar/vazirmatn@v33.003/Vazirmatn-font-face.css"
        rel="stylesheet"
        type="text/css"
      />

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          backgroundColor: "#393a47",
          fontFamily: "Vazirmatn",
          alignItems: "center",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography
            sx={{
              padding: "20px",
              color: "white",
              fontFamily: "Vazirmatn",
              paddingRight: "5px",
              cursor: "pointer",
            }}
          >
            پروفایل
          </Typography>
          <CardMedia
            component="img"
            sx={{ height: "40px" }}
            image="/profile-mine.svg"
          />
        </Box>
        <Typography
          sx={{
            color: "white",
            alignContent: "center",
            padding: "10px",
            backgroundColor: "#2b2b36",
            borderRadius: "10px",
            height: "40px",
            fontFamily: "Vazirmatn",
          }}
        >
          سانس
        </Typography>
        <Button
          size="large"
          variant="text"
          sx={{ color: "white", marginRight: "20px", fontFamily: "Vazirmatn" }}
          font-size="16px"
        >
          سینما تیکت
        </Button>
      </Box>

      <Container
        maxWidth="xl"
        sx={{
          fontFamily: "Vazirmatn",
          backgroundColor: "#393a47",
          borderTop: "1px solid #3e3f4d",
        }}
      >
        <Box
          maxWidth="lg"
          sx={{ margin: "auto", height: "100vh", textAlign: "center" }}
        >
          <Box
            sx={{
              marginTop: "100px",
              maxWidth: "700px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            <Typography
              sx={{
                fontFamily: "Vazirmatn",
                padding: "5px",
                border: "1px solid white",
                borderRadius: "10px",
              }}
            >
              صحنه اجرا
            </Typography>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "repeat(12, 1fr)",
                gap: "20px",
                placeItems: "center",
              }}
            >
              {seats.map((seat) => (
                <Seat
                  isReserved={seat.isReserved}
                  price={seat.price}
                  rowNumber={seat.rowNumber}
                  colNumber={seat.colNumber}
                  addSeatToSelectedSeats={addSeatToSelectedSeats}
                  removeSeatFromSelectedSeats={removeSeatFromSelectedSeats}
                />
              ))}
            </Box>
          </Box>
        </Box>
      </Container>

      <Box sx={{ position: "fixed", bottom: "0", backgroundColor: "#2a2a35" }}>
        <Box
          sx={{
            display: "flex",
            width: "100VW",
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: "#2a2a35",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Vazirmatn",
              padding: "20px",
              paddingLeft: "90px",
              color: "white",
            }}
          >
            ظرفیت سالن:100
          </Typography>
          <Box
            sx={{ display: "flex", alignItems: "center", marginRight: "100px" }}
          >
            <Typography
              sx={{
                color: "white",
                padding: "5px",
                marginLeft: "20px",
                fontFamily: "Vazirmatn",
              }}
            >
              انتخاب شما
            </Typography>
            <Box
              sx={{
                backgroundColor: "red",
                height: "25px",
                width: "25px",
                borderRadius: "100%",
                marginRight: "20px",
              }}
            ></Box>
            <Typography
              sx={{
                color: "white",
                padding: "5px",
                marginLeft: "20px",
                fontFamily: "Vazirmatn",
              }}
            >
              فروخته شده
            </Typography>
            <Box
              sx={{
                backgroundColor: "black",
                height: "25px",
                width: "25px",
                borderRadius: "100%",
                marginRight: "20px",
              }}
            ></Box>

            <Typography
              sx={{
                color: "white",
                padding: "5px",
                marginLeft: "20px",
                fontFamily: "Vazirmatn",
              }}
            >
              صندلی خالی
            </Typography>
            <Box
              sx={{
                backgroundColor: "#bcc7d6",
                height: "25px",
                width: "25px",
                borderRadius: "100%",
                marginRight: "20px",
              }}
            ></Box>
          </Box>
        </Box>
        <Box
          sx={{
            backgroundColor: "#393a47",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontFamily: "Vazirmatn",
          }}
        >
          <Button
            sx={{
              backgroundColor: "#aaaaaa",
              color: "#ffffff",
              padding: "10px",
              margin: "40px",
              fontSize: "18px",
            }}
          >
            ثبت صندلی
          </Button>
          <Box sx={{ display: "flex", alignItems: "center", gap: "20px" }}>
            {selectedSeats.map((sSeat) => (
              <span>
                {sSeat.colNumber} | {sSeat.rowNumber} | {sSeat.price}
              </span>
            ))}
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              fontFamily: "Vazirmatn",
              width: "300px",
              borderLeft: "2px dashed white",
            }}
          >
            <Typography
              sx={{
                fontFamily: "Vazirmatn",
                color: "white",
                paddingLeft: "20px",
              }}
            >
              باغ کیانوش
            </Typography>
            <CardMedia
              sx={{
                height: "150px",
                width: "170px",
                margin: "10px",
                paddingRight: "50px",
              }}
              component="img"
              image="/Images/1/51e6de901eb9ec02e22e24f7f99c877d.webp"
            />
          </Box>
        </Box>
      </Box>
    </>
  );
}
