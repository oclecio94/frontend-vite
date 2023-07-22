import { Routes, Route } from "react-router-dom";
import { Private } from "./private";
import Home from "../pages/home/index.jsx";
import Login from "../pages/login/index.jsx";
import Users from "../pages/users/index.jsx";
import FormUser from "../pages/users/form";
import Client from "../pages/clients";
import FormClient from "../pages/clients/form";

export const RoutesComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Private Component={Home} />} />
      <Route path="/usuarios" element={<Private Component={Users} />} />
      <Route
        path="/usuarios/formulario"
        element={<Private Component={FormUser} />}
      />
      <Route path="/clientes" element={<Private Component={Client} />} />
      <Route
        path="/clientes/formulario"
        element={<Private Component={FormClient} />}
      />
    </Routes>
  );
};
