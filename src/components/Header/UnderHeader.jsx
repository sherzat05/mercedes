import { Box, Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../routes/AuthContext";
import { ADMIN_USER } from "../../helpers/const";

const UnderHeader = () => {
  const navigate = useNavigate();
  const { user } = useAuthContext();
  return (
    <Box>
      {ADMIN_USER.map((el) =>
        user && el.email === user.email ? (
          <>
            <Box
              sx={{
                width: "300px",
                height: "40px",
                background: "silver",
                borderRadius: "20px",
                display: "flex",
                textAlign: "center",
              }}
            >
              <Button
                onClick={() => navigate("/myCars")}
                sx={{
                  width: "100px",

                  height: "40px",
                  color: "black",
                  borderRight: "1px solid black",
                  borderBottomLeftRadius: "25px",
                  borderTopLeftRadius: "25px",

                  transition: ".6s",
                  "&:hover": {
                    textShadow: "1px 1px 2px #082b34",
                    boxShadow: "0px 0px 12px 4px rgba(0,0,0,0.74)",
                  },
                }}
              >
                My Cars
              </Button>
              <Button
                onClick={() => navigate("/myRents")}
                sx={{
                  width: "100px",
                  height: "40px",
                  color: "black",
                  borderRight: "1px solid black",
                  borderRadius: "0",
                  transition: ".6s",
                  "&:hover": {
                    textShadow: "1px 1px 2px #082b34",
                    boxShadow: "0px 0px 12px 4px rgba(0,0,0,0.74)",
                  },
                }}
              >
                My Rents
              </Button>
              <Button
                onClick={() => navigate("/rents")}
                sx={{
                  width: "100px",
                  height: "40px",
                  color: "black",
                  borderBottomRightRadius: "25px",
                  borderTopRightRadius: "25px",
                  transition: ".6s",
                  "&:hover": {
                    textShadow: "1px 1px 2px #082b34",
                    boxShadow: "0px 0px 12px 4px rgba(0,0,0,0.74)",
                  },
                }}
              >
                Rent Car
              </Button>
            </Box>
          </>
        ) : (
          <Button
            onClick={() => navigate("/rents")}
            sx={{
              width: "100px",
              height: "40px",
              color: "black",
              borderRadius: "25px",
              transition: ".6s",
              background: "silver",

              "&:hover": {
                textShadow: "1px 1px 2px #082b34",
                boxShadow: "0px 0px 12px 4px rgba(0,0,0,0.74)",
              },
            }}
          >
            Rent Car
          </Button>
        )
      )}
    </Box>
  );
};

export default UnderHeader;
