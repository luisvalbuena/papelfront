import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import HomePage from "./pages/Home/HomePage";
import InvitationsPage from "./pages/invitations/InvitationsPage";
import SobresPage from "./pages/sobres/SobresPage";
import PapeleriaPage from "./pages/papeleria/PapeleriaPage";
import ComplementosPage from "./pages/complementos/ComplementosPage";
import RegalosPage from "./pages/regalos/RegalosPage";
import ComunionesPage from "./pages/comuniones/ComunionesPage";
import ProductDetailPage from "./pages/product/ProductDetailPage";
import ScrollToTop from "./components/ScrollToTop";
import CartPage from "./pages/cart/CartPage";
import BillPage from "./pages/bill/BillPage";
import NotFound from "./pages/others/NotFoundPage";

export default function App() {
  return (
    <>
    <ScrollToTop/>
    <Routes>
      {/* Ruta raíz envuelta en Layout */}
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/invitaciones" element={<InvitationsPage/>}/>
        <Route path="/sobres" element={<SobresPage/>}/>
        <Route path="/papeleria" element={<PapeleriaPage/>}/>
        <Route path="/complementos" element={<ComplementosPage/>}/>
        <Route path="/regalos" element={<RegalosPage/>}/>
        <Route path="/comuniones" element={<ComunionesPage/>}/>
        <Route path="/product/:category/:id" element={<ProductDetailPage/>}/>
        <Route path="/cart" element={<CartPage/>}/>
        <Route path="/bill" element={<BillPage/>}/>
        <Route path="/*" element={<NotFound/>}/>

      </Route>
    </Routes>
    </>
  );
}

