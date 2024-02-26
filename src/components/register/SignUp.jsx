import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useAuthContext } from "../../routes/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const SignUp = () => {
  const { register, googleSignUp } = useAuthContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit() {
    try {
      await register(email, password);
    } catch (error) {
      setError(error.message);
    }
  }
  const navigate = useNavigate()

  return (
    <div>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          backdropFilter: "blur(20px)",
          justifyContent: "center",
          alignItems: "center",
          width: "500px",
          height: "90vh",
          gap: "20px",
          marginLeft: "480px",
          marginTop: "40px",
          borderRadius: "20px"
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
        <Typography
          sx={{
            color: "white",
            fontSize: "30px",
            letterSpacing: "5px",
            fontFamily: "M PLUS 1p",
          }}
        >
          REGISTER
        </Typography>
        <TextField
          onChange={(e) => setEmail(e.target.value)}
          className="mycarsinput"
          sx={{
            border: "2px solid silver",
            borderRadius: "20px",
            width: "400px",
            "& label": {
              color: "white",
            },
          }}
          label="email"
          inputProps={{
            style: { color: "white" },
          }}
        ></TextField>{" "}
        <TextField
          onChange={(e) => setPassword(e.target.value)}
          className="mycarsinput"
          sx={{
            border: "2px solid silver",
            borderRadius: "20px",
            width: "400px",
            "& label": {
              color: "white",
            },
          }}
          label="password"
          inputProps={{
            style: { color: "white" },
          }}
        ></TextField>
        <Link to={"/"}>
          <Button
            onClick={handleSubmit}
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
            Register
          </Button>
        </Link>
        <Link to={"/"}>
          <Button
            onClick={() => googleSignUp()}
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
            sign in with google
          </Button>
        </Link>
      </Box>
    </div>
  );
};

export default SignUp;
