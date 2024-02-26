import {
  Box,
  Button,
  CardMedia,
  FormControl,
  InputLabel,
  Select,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCars } from "../../context/CarContext";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import UnderHeader from "../Header/UnderHeader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { useAuthContext } from "../../routes/AuthContext";
import { ADMIN_USER } from "../../helpers/const";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
const Cars = () => {
  const navigate = useNavigate();
  const { readCar, cars, deleteCar, menu } = useCars();
  useEffect(() => {
    readCar();
  }, []);
  const { user } = useAuthContext();

  const options = ["Sedan", "Cupe", "SUV"];
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  const open = Boolean(anchorEl);
  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const [age, setAge] = React.useState("");
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <>
      <div className="container">
        {menu === 0 ? (
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: "20px",
              justifyContent: "center",
              paddingTop: "30px",
              marginTop: "150px",
              borderRadius: "30px",
            }}
          >
            {cars.map((el, idx) => (
              <Box
                sx={{
                  border: "2px solid silver",
                  width: "400px",
                  height: "300px",
                  marginBottom: "20px",
                  borderRadius: "20px",
                  padding: "20px",
                  backdropFilter: "blur(20px)",
                  transition: ".6s",
                  "&:hover": {
                    transform: "scale(1.05)",
                  },
                }}
              >
                <CardMedia
                  sx={{ width: "full", borderRadius: "10px" }}
                  component="img"
                  height="170px"
                  image={el.image}
                  alt="MERCEDES"
                />{" "}
                <Typography sx={{ color: "white" }}>NAME: {el.name}</Typography>
                <Typography sx={{ color: "white" }}>
                  MODEL: {el.model}
                </Typography>
                <Typography sx={{ color: "white" }}>
                  BodyType: {el.bodyType}
                </Typography>
                <Typography sx={{ color: "white" }}>
                  PRICE: {el.price}$
                </Typography>
                {ADMIN_USER.map((el) =>
                  user && el.email === user.email ? (
                    <>
                      {" "}
                      <Button onClick={() => deleteCar(el.id)}>
                        <DeleteIcon sx={{ color: "white" }} />
                      </Button>
                      <Button onClick={() => navigate(`/edit/${el.id}`)}>
                        <EditIcon sx={{ color: "white" }} />
                      </Button>
                    </>
                  ) : (
                    <Button>
                      <ShoppingCartIcon />
                    </Button>
                  )
                )}
              </Box>
            ))}
          </Box>
        ) : (
          <UnderHeader />
        )}
      </div>
      <Box
        sx={{
          width: "400px",
          height: "80px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "fixed",
          top: "80.3px",
          backdropFilter: "blur(30px)",
          background: "#0000008f",
          borderBottomLeftRadius: "80px",
          right: "0",
        }}
      >
        <div
          style={{
            height: "30px",
          }}
        >
          <List
            component="nav"
            aria-label="Device settings"
            sx={{
              bgcolor: "rgba(192, 192, 192, 0.593)",
              width: "110px",
              height: "60px",
              padding: "0",
              borderRadius: "15px",
              fontSize: "7px",
              marginTop: "-13px",
              marginRight: "10px",
              marginLeft: "-10px",
            }}
          >
            <ListItemButton
              sx={{ fontSize: "10px" }}
              id="lock-button"
              aria-haspopup="listbox"
              aria-controls="lock-menu"
              aria-label="body Type"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClickListItem}
            >
              <ListItemText
                sx={{ background: "rgba(192, 192, 192, 0)" }}
                primary="Body Type"
                secondary={options[selectedIndex]}
              />
            </ListItemButton>
          </List>
          <Menu
            id="lock-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "lock-button",
              role: "listbox",
            }}
          >
            {options.map((option, index) => (
              <MenuItem
                sx={{ fontSize: "10px" }}
                key={option}
                selected={index === selectedIndex}
                onClick={(event) => handleMenuItemClick(event, index)}
              >
                {option}
              </MenuItem>
            ))}
          </Menu>
        </div>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",

            height: "30px",
            width: "160px",
          }}
        >
          <Typography sx={{ color: "white", fontSize: "12px" }}>
            Sort By Price:
          </Typography>
          <FormControl sx={{ width: "80px" }} fullWidth>
            <InputLabel id="demo-simple-select-label"></InputLabel>
            <Select
              sx={{ fontSize: "12px", color: "white", width: "130px" }}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              onChange={handleChange}
            >
              <MenuItem value={10}>up to down</MenuItem>
              <MenuItem value={20}>down to up</MenuItem>
              <MenuItem value={30}>default</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Box>
    </>
  );
};

export default Cars;
