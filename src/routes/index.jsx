import { Routes, Route } from "react-router-dom";
import { Private } from "./private";
import Home from "../pages/home/index.jsx";
import Login from "../pages/login/index.jsx";
import Products from "../pages/products/index.jsx";

export const RoutesComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/produtos" element={<Products />} />
      <Route path="/home" element={<Private Component={Home} />} />
    </Routes>
  );
};
