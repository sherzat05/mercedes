import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import { Box, Button, TextField, Typography } from "@mui/material";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import { useNavigate, useParams } from "react-router-dom";
import { useCars } from "../../context/CarContext";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import "./EditCar.css"

const EditCar = () => {
  const { getOneCar, oneCar, editCar } = useCars();
  const { id } = useParams();

  const navigate = useNavigate();
  useEffect(() => {
    getOneCar(id);
  }, []);

  useEffect(() => {
    if (oneCar) {
      setImage(oneCar.image);
      setName(oneCar.name);
      setPrice(oneCar.price);
      setModel(oneCar.model);
      setBodyType(oneCar.bodyType)
    }
  }, [oneCar]);

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [model, setModel] = useState("");
  const [image, setImage] = useState("");
  const [bodyType, setBodyType] = useState("");


  function hendleSaveCar() {
    const carObj = {
      name: name,
      price: price,
      model: model,
      image: image,
      bodyType: bodyType,
    };
    editCar(id, carObj);
  }

  return (
    <>
    <Box className="editPage">
    <div className="container">
      <Box className="editcard"
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
          EDIT YOUR CAR
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
          onChange={(e) => setBodyType(e.target.value)}
          className="mycarsinput"
          sx={{
            border: "2px solid silver",
            borderRadius: "20px",
            width: "400px",
            "& label": {
              color: "white",
            },
          }}
          label="BodyType"
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
          onClick={() => hendleSaveCar(navigate("/"))}
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
        >
          Edit Car
        </Button>
      </Box>
    </div>
    </Box>
    </>
  );
};

export default EditCar;
