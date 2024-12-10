import Box from "@mui/material/Box";
import { ISeat } from "@/lib/types/types";
import { useState } from "react";

interface ISeatProps extends ISeat {
  addSeatToSelectedSeats: (seat: ISeat) => void;
  removeSeatFromSelectedSeats: (colNumber: string, rowNumber: string) => void;
}

const Seat = ({
  colNumber,
  rowNumber,
  isReserved,
  price,
  removeSeatFromSelectedSeats,
  addSeatToSelectedSeats,
}: ISeatProps) => {
  const [isSelected, setIsSelected] = useState(false);

  function handleSeatClick() {
    if (isReserved) return;

    if (isSelected) {
      setIsSelected(false);
      removeSeatFromSelectedSeats(colNumber, rowNumber);
    } else {
      setIsSelected(true);
      addSeatToSelectedSeats({ isReserved, price, colNumber, rowNumber });
    }
  }

  function getBackgroundColor() {
    if (isReserved) return "#000";
    if (isSelected) return "#ff0000";
    return "#bcc7d6";
  }

  return (
    <Box
      onClick={() => {
        handleSeatClick();
      }}
      sx={{
        backgroundColor: getBackgroundColor(),
        height: "40px",
        width: "40px",
        borderRadius: "100%",
        cursor: `${isReserved ? "default" : "pointer"}`,
      }}
    />
  );
};

export default Seat;
