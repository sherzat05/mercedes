import { Box, Button, CardMedia, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCars } from "../../context/CarContext";
import DeleteIcon from "@mui/icons-material/Delete";
import "./Rents.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Rents = () => {
  const navigate = useNavigate();
  const { readRent, rents, deleteRent, menu } = useCars();
  useEffect(() => {
    readRent();
  }, []);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = rents.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <>
    <Box id="rents">
      <div className="container">
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            backdropFilter: "blur(30px)",
            padding: "15px",
            background: "#0000008f",
            width: "1515px",
            marginLeft: "-39px",
            marginTop: "-11px",
            justifyContent: "space-between",
          }}
        >
          <Button
            sx={{
              width: "150px",
              height: "40px",
              color: "black",
              border: "1px solid black",
              borderRadius: "15px",
              transition: ".6s",
              "&:hover": {
                color: "white",
                textShadow: "1px 1px 2px #082b34",
                boxShadow: "0px 0px 12px 4px rgba(0,0,0,0.74)",
              },
              background: "silver",
            }}
            onClick={() => navigate("/")}
          >
            back to menu
          </Button>
          <img
            style={{ width: "40px", marginLeft: "-70px" }}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Mercedes-Logo.svg/567px-Mercedes-Logo.svg.png"
            alt=""
          />
          <Typography>RENT CARS</Typography>
        </Box>
        <div style={{ marginTop: "20px" }}>
          <Button
            sx={{ color: "White" }}
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(currentPage - 1)}
          >
            <ArrowBackIosIcon />
          </Button>
          <Button
            sx={{ color: "white" }}
            disabled={indexOfLastItem >= rents.length}
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            <ArrowForwardIosIcon />
          </Button>
        </div>

        <Box
          id="rentlist"
          sx={{
            paddingTop: "30px",
            marginTop: "20px",
            borderRadius: "30px",
            overflow: "scroll",
            paddingLeft: "80px"
          }}
        >
          <Box sx={{display: "flex", flexWrap: 'wrap', gap: "20px"}}>
            {currentItems.map((el) => (
            <>
            <Box
            className="rentcard"
            sx={{
              border: "2px solid silver",
              width: "600px",
              height: "200px",
              marginBottom: "20px",
              borderRadius: "20px",
              padding: "20px",
              backdropFilter: "blur(20px)",
              transition: ".6s",
              "&:hover": {
                transform: "scale(1.05)",
              },
              display: "flex",
            }}
          >
            <CardMedia
              sx={{ width: "full", borderRadius: "10px", width: "300px" }}
              component="img"
              height="190px"
              image={el.image}
              alt="MERCEDES"
            />{" "}
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Typography sx={{ color: "white" }}>
                NAME: {el.name}
              </Typography>
              <Typography sx={{ color: "white" }}>
                MODEL: {el.model}
              </Typography>
              <Typography sx={{ color: "white" }}>
                PRICE: {el.price}$
              </Typography>
            </Box>
            <Button onClick={() => deleteRent(el.id)}>
              <DeleteIcon sx={{ color: "white" }} />
            </Button>
          </Box>
         
          </>
            ))}
          </Box>
        </Box>
      </div>
    </Box>
    </>
  );
};

export default Rents;
