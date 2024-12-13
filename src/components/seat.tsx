import Box from "@mui/material/Box";
import { ISeat } from "@/lib/types/types";
import { useState } from "react";

interface ISeatProps extends ISeat {
  addSeatToSelectedSeats: (seat: ISeat) => void;
  removeSeatFromSelectedSeats: (colNumber: number, rowNumber: number) => void;
}

const Seat = ({
  id,
  column,
  row,
  status,
  price,
  removeSeatFromSelectedSeats,
  addSeatToSelectedSeats,
}: ISeatProps) => {
  const [isSelected, setIsSelected] = useState(false);

  function handleSeatClick() {
    if (status === "taken") return;

    if (isSelected) {
      setIsSelected(false);
      removeSeatFromSelectedSeats(column, row);
    } else {
      setIsSelected(true);
      addSeatToSelectedSeats({ status, price, column, row, id });
    }
  }

  function getBackgroundColor() {
    if (status === "taken") return "#000";
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
        cursor: `${status === "taken" ? "default" : "pointer"}`,
      }}
    />
  );
};

export default Seat;
