import React from "react";
import MyCars from "../components/Admin/MyCars";
import MyRents from "../components/Admin/MyRents";
import { Route, Routes } from "react-router-dom";
import Header from "../components/Header/Header";
import Cars from "../components/Cars/Cars";
import Rents from "../components/Cars/Rents";
import Home from "../components/Home/Home";
import EditCar from "../components/Cars/EditCar";
import SignUp from "../components/register/SignUp";
import SignIn from "../components/register/SignIn";
import { ProtectedRoutes } from "../helpers/function";

const MainRoutes = () => {
  const PRIVATE = [
    { link: "/myCars", element: <MyCars />, id: 1 },
    { link: "/myRents", element: <MyRents />, id: 2 },
    { link: "edit/:id", element: <EditCar />, id: 6 },
  ];
  const PUBLIC = [
    { link: "/", element: <Home />, id: 3 },
    { link: "cars", element: <Cars />, id: 4 },
    { link: "/rents", element: <Rents />, id: 5 },
    { link: "/register", element: <SignUp />, id: 7 },
    { link: "/signin", element: <SignIn />, id: 8 },
  ];
  return (
    <Routes>
      <Route title={<ProtectedRoutes/>}>
        {PRIVATE.map((el) => (
          <Route path={el.link} element={el.element} key={el.id} />
        ))}
      </Route>
      {PUBLIC.map((el) => (
        <Route path={el.link} element={el.element} key={el.id} />
      ))}
    </Routes>
  );
};

export default MainRoutes;
