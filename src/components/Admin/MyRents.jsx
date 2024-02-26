import { Label } from "@mui/icons-material";
import { Box, Button, TextField, Typography, colors } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CarContext, { useCars } from "../../context/CarContext";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import "./MyRents.css"

const MyCars = () => {
  const { addRent } = useCars();
  const [name, setName] = useState("");
  const [model, setModel] = useState("");
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState("");

  function handleChange() {
    let newObj = {
      name: name,
      model: model,
      price: price,
      image: image,
    };
    addRent(newObj);
  }

  const navigate = useNavigate();
  return (
    <>
      <Box className="myrents">
        <div className="container">
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: "40px",
              height: "700px",
              width: "500px",
              backdropFilter: "blur(20px)",
              borderRadius: "30px",
              marginLeft: "450px",
            }}
          >
            <Button
              onClick={() => navigate("/")}
              sx={{
                position: "absolute",
                top: "10px",
                left: "0",
                color: "white",
                background: "none",
                textShadow: "1px 1px 2px #082b34",
              }}
            >
              <ArrowBackIcon
                sx={{ fontSize: "40px", textShadow: "1px 1px 2px #082b34" }}
              />
            </Button>
            <img
              style={{ width: "40px" }}
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Mercedes-Logo.svg/567px-Mercedes-Logo.svg.png"
              alt=""
            />
            <Typography
              sx={{
                color: "white",
                fontSize: "30px",
                letterSpacing: "5px",
                fontFamily: "M PLUS 1p",
              }}
            >
              ADD A NEW RENT CAR
            </Typography>
            <TextField
              onChange={(e) => setName(e.target.value)}
              className="mycarsinput"
              sx={{
                border: "2px solid silver",
                borderRadius: "20px",
                width: "400px",
                fontFamily: "M PLUS 1p",
                "& label": {
                  color: "white",
                },
              }}
              label="name"
              inputProps={{
                style: { color: "white" },
              }}
            ></TextField>
            <TextField
              onChange={(e) => setModel(e.target.value)}
              className="mycarsinput"
              sx={{
                border: "2px solid silver",
                borderRadius: "20px",
                width: "400px",
                "& label": {
                  color: "white",
                },
              }}
              label="model"
              inputProps={{
                style: { color: "white" },
              }}
            ></TextField>{" "}
            <TextField
              onChange={(e) => setPrice(e.target.value)}
              className="mycarsinput"
              sx={{
                border: "2px solid silver",
                borderRadius: "20px",
                width: "400px",
                "& label": {
                  color: "white",
                },
              }}
              label="price"
              inputProps={{
                style: { color: "white" },
              }}
            ></TextField>
            <TextField
              onChange={(e) => setImage(e.target.value)}
              className="mycarsinput"
              sx={{
                border: "2px solid silver",
                borderRadius: "20px",
                width: "400px",
                "& label": {
                  color: "white",
                },
              }}
              label="image url"
              inputProps={{
                style: { color: "white" },
              }}
            ></TextField>
            <Button
              sx={{
                color: "silver",
                border: "1px solid white",
                borderRadius: "10px",
                width: "300px",
                height: "50px",
                transition: ".6s",
              background: "#0000008f",

                "&:hover": {
                  color: "black",
                  background: "silver",
                  border: "none",
                },
              }}
              onClick={() => handleChange(navigate("/rents"))}
            >
              add rent car
            </Button>
          </Box>
        </div>
      </Box>
    </>
  );
};

export default MyCars;
