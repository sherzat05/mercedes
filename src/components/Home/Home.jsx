import React from "react";
import Header from "../Header/Header";
import UnderHeader from "../Header/UnderHeader";
import Cars from "../Cars/Cars";
import { Box } from "@mui/material";

const Home = () => {
  return (
    <div>
      <Header />
      <Box>
        <Cars />
      </Box>
    </div>
  );
};

export default Home;
