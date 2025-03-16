import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import Landing from "../Landing/Landing";
import Signup from "../Auth/Signup";
import Orders from "../Orders/Orders";
import Cart from "../Cart/Cart";
import ProductDetail from "../ProductDetail/ProductDetail";
import Payment from "../Payment/Payment";
import Results from "../Results/Results";
function Routing() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/auth" element={<Signup />} />
          <Route path="/Payments" element={<Payment />} />
          <Route path="/Orders" element={<Orders />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/category/:categoryName" element={<Results />} />
          <Route path="/products/:productId" element={<ProductDetail />} />
          <Route path="/auth" element={<Signup />} />
        </Routes>
      </Router>
    </div>
  );
}

export default Routing;
