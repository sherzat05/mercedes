import React, { useState } from "react";
import "./Header.css";
import { Box, Button, IconButton, ListItem, Menu, MenuItem, Tooltip, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import UnderHeader from "./UnderHeader";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from "react-router-dom";
import { useAuthContext } from "../../routes/AuthContext";

const Header = ({ menu }) => {
  const {user, logOut} = useAuthContext()
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Box sx={{ display: "flex", backdropFilter: "blur(30px)" }} id="header">
        <Box
          sx={{ display: "flex", gap: "26%", marginTop: "20px" }}
          className="container"
        >
          <UnderHeader />
          <img
            style={{ width: "40px" }}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Mercedes-Logo.svg/567px-Mercedes-Logo.svg.png"
            alt=""
          />
          <Box
            sx={{
              border: "2px",
              border: "solid",
              border: "black",
              width: "200px",
              height: "40px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <input placeholder="search" id="outlined-basic" type="search" />
            <IconButton>
              <SearchIcon sx={{ color: "white" }} />
            </IconButton>
          <div style={{marginLeft: "30px"}}>
          {
            user ? (
              <Tooltip title={user.displayName}>

              <Button 
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
             <img style={{width: "45px", height: "45px", borderRadius: "50%"}} src={user.photoURL} alt={user.displayName}/>
            </Button>
              </Tooltip>
            ):(
              <Button
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              <AccountCircleIcon sx={{color: "white", fontSize:"40px"}}/>
            </Button>
            )
          }
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <Link style={{textDecoration: "none"}} to={"/signin"}>
              <MenuItem sx={{color: "black", textDecoration: "none"}} onClick={handleClose}>Sign In</MenuItem>
              </Link>
              <Link  style={{textDecoration: "none"}} to={"/register"}>
              <MenuItem sx={{color: "black"}} onClick={handleClose}>Sign Up</MenuItem>
              </Link>
              <MenuItem onClick={()=> logOut(handleClose())}><LogoutIcon/></MenuItem>
            </Menu>
          </div>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Header;
