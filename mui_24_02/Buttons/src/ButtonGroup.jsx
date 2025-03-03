import React from "react";
import { Box, Button } from "@mui/material";

const ButtonGroup = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "20px",
        margin: "20px",
        padding: "10px",
      }}
    >
      <Button
        sx={{
          color: "#fff",
          backgroundColor: "red",
          padding: "12px 24px",
          "&:hover": { backgrounColor: "darkred" },
        }}
      >
        Red Button
      </Button>
      <Button
        sx={{
          color: "#fff",
          backgroundColor: "green",
          padding: "12px 24px",
          "&:hover": { backgrounColor: "darkgreen" },
        }}
      >
        Green Button
      </Button>
      <Button
        sx={{
          color: "#fff",
          backgroundColor: "blue",
          padding: "12px 24px",
          "&:hover": { backgrounColor: "darkblue" },
        }}
      >
        Blue Button
      </Button>
    </Box>
  );
};

export default ButtonGroup;