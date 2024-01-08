import React from "react";
import { BrowserRouter, Route, Routes as RoutesDom } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Products from "../pages/Products/Products";
import Acerca from "../pages/Acerca/Acerca";
import Contacto from "../pages/Contacto/Contacto";
import ProtectedRoute from "../components/ProtectedRoute/ProtectedRoute";
import Checkout from "../pages/Checkout/Checkout";
import Register from "../pages/Register/Register";
import Felicitaciones from "../pages/Felicitaciones/Felicitaciones";
import Issue from "../pages/Issue/Issue";
import Validate from "../pages/Validate/Validate";
import Resumen from "../pages/Resumen/Resumen";
import MisOrdenes from "../pages/MisOrdenes/MisOrdenes";

const Routes = () => {
  return (
    <BrowserRouter>
      <Layout>
        <RoutesDom>
          <Route path="/" element={<Home />} />
          <Route path="acerca" element={<Acerca />} />
          <Route path="contacto" element={<Contacto />} />
          <Route path="/products" element={<Products />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/felicitaciones" element={<Felicitaciones/>} />
          <Route path="/mis-ordenes" element={<MisOrdenes/>} />
          <Route path="/resumen/:orderId" element={<Resumen/>} />
          <Route path="/issue" element={<Issue />} />
          <Route path="/validate" element={<Validate />} />
          <Route path="*" element={<h2>Error!</h2>} />

          <Route
            path="/checkout"
            element={
              <ProtectedRoute redirectTo="/login">
                <Checkout />
              </ProtectedRoute>
            }
          />
        </RoutesDom>
      </Layout>
    </BrowserRouter>
  );
};

export default Routes;
