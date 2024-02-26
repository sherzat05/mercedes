import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../routes/AuthContext";

export const ProtectedRoutes = () => {
  const { user } = useAuthContext();
  function isAllowed() {
    if (user.email === "sherzatalmazov05@gmail.com") {
      return;
    } else {
      return false;
    }
  }
  isAllowed()  ? (<Outlet/>): (<Navigate to={"/signin"}/>)
};
