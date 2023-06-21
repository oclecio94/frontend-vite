import { Routes, Route } from "react-router-dom";
import { Private } from "./private";
import Home from "../pages/home/index.jsx";
import Login from "../pages/login/index.jsx";
import Users from "../pages/users/index.jsx";

export const RoutesComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Private Component={Home} />} />
      <Route path="/usuarios" element={<Private Component={Users} />} />
    </Routes>
  );
};
