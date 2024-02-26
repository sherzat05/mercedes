import React, { createContext, useContext, useState } from "react";
import Cars from "../components/Cars/Cars";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

const carContext = createContext();
export const useCars = () => useContext(carContext);
const CarContext = ({ children }) => {
  let API_CAR = "http://localhost:3000/car";
  let API_RENT = "http://localhost:3000/rent";
  const [cars, setCars] = useState([]);
  const [rents, setRents] = useState([]);

  const [menu, setMenu] = useState(0);  

  async function readCar() {
    const { data } = await axios(API_CAR);
    setCars(data);
  }

  const [oneCar, setOnecar] = useState({});
  async function addCar(newCar) {
    await axios.post(API_CAR, newCar);
  }

  async function deleteCar(id) {
    await axios.delete(`${API_CAR}/${id}`);
    readCar();
  }

  async function getOneCar(id) {
    const { data } = await axios(`${API_CAR}/${id}`);
    setOnecar(data);
    readCar();
  }

  async function editCar(id, editedCar) {
    await axios.patch(`${API_CAR}/${id}`, editedCar);
  }
  async function addRent(newRent) {
    await axios.post(API_RENT, newRent);
  }
  async function readRent() {
    const { data } = await axios(API_RENT);
    setRents(data);
  }
  async function deleteRent(id) {
    await axios.delete(`${API_RENT}/${id}`);
    readRent();
  }

  //filterCar
  // const location = useLocation();
  // const navigate = useNavigate();

  // function fetchByParams(query, value){

  // }

  //filterCar

  let values = {
    menu,
    setMenu,
    getOneCar,
    editCar,
    addCar,
    readCar,
    cars,
    deleteCar,
    addRent,
    deleteRent,
    readRent,
    rents,
  };

  return <carContext.Provider value={values}>{children}</carContext.Provider>;
};

export default CarContext;
