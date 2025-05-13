import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import Landing from "../Landing/Landing";
import Signup from "../Auth/Signup";
import Orders from "../Orders/Orders";
import Cart from "../Cart/Cart";
import ProductDetail from "../ProductDetail/ProductDetail";
import Payment from "../Payment/Payment";
import Results from "../Results/Results";
import { CheckoutProvider, Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
const stripePromise = loadStripe(
  "pk_test_51RHCzfQ7BvTgfSfkvWbCklWyXJZ08tdawqI83IB2bA5bIidjmP3V6dTh1YzYi2CnS4cNXStCTXYvfgut66yi1ylB00wA662Ubl"
);
function Routing() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/Home" element={<Landing />} />
          <Route
            path="/Payments"
            element={
              <Elements stripe={stripePromise}>
                <Payment />
              </Elements>
            }
          />
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
