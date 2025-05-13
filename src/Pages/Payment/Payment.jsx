import React, { useContext, useState } from "react";
import classes from "./Payment.module.css";
import ProductCard from "../../Components/product/ProductCard";
import { DataContext } from "../../Components/DataProvider/DataProvider";
import Layout from "../../Components/Layout/Layout";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import CurrencyFormat from "../../Components/currencyFormat/CurrencyFormat";
import { ClipLoader } from "react-spinners";
import { axiosInstance } from "../../Api/Axios";
import { useNavigate } from "react-router";

function Payment() {
  const [cardError, setCardError] = useState("");
  const [{ basket, user }] = useContext(DataContext);
  const stripe = useStripe();
  const elements = useElements();
  const [processing, setProcessing] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const navigate = useNavigate();

  // Calculate total items in the basket
  const totalItem = basket.reduce((amount, item) => amount + item.amount, 0);
  const totalAmount = basket.reduce(
    (total, item) => total + item.price * item.amount,
    0
  );

  const handleChange = (e) => {
    setCardError(e.error ? e.error.message : "");
  };

  const handlePayment = async (e) => {
    e.preventDefault();
    setProcessing(true);
    setSubmitError(""); // Reset submit error before new payment attempt

    try {
      // Create payment intent on the backend
      const response = await axiosInstance.post(
        `/payment/create?total=${totalAmount * 100}`
      );
      const clientSecret = response.data;

      // Confirm the payment with Stripe
      const confirmation = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      });

      if (confirmation.error) {
        setSubmitError(confirmation.error.message);
      } else {
        // Payment successful, navigate to orders page
        navigate("/orders");
      }
    } catch (error) {
      console.error(error);
      setSubmitError(error.message);
    } finally {
      setProcessing(false);
    }
  };

  return (
    <Layout>
      <div className={classes.Payment_header}>Checkout ({totalItem}) items</div>
      <section className={classes.Payment}>
        <div className={classes.flex}>
          <h3>Delivery Address</h3>
          <div>
            <div>{user?.email || "Guest"}</div>
            <div>123 React Lane</div>
            <div>Chicago, IL</div>
          </div>
        </div>
        <hr />
        <h1
          style={{
            textDecoration: "underline",
            color: "red",
            textAlign: "center",
          }}
        >
          REVIEW ITEMS AND DELIVERY
        </h1>
        <div className={classes.flex}>
          <div className={classes.productList}>
            {basket.map((item, i) => (
              <ProductCard key={i} product={item} flex={true} />
            ))}
          </div>
        </div>
        <hr />
        <h3 className="text-center text-decoration-underline text-info">
          Payment Methods
        </h3>
        <div className={classes.flex}>
          <div className={classes.payment_card_container}>
            <form onSubmit={handlePayment}>
              {cardError && <small className="text-danger">{cardError}</small>}
              <CardElement onChange={handleChange} />
              <div className={classes.payment_price}>
                <div>
                  <div className="d-flex" style={{ gap: "10px" }}>
                    <span>Total Order:</span>
                    <span>
                      <CurrencyFormat amount={totalAmount} />
                    </span>
                  </div>
                </div>
                <button
                  type="submit"
                  className="btn btn-success w-100"
                  disabled={processing}
                >
                  {processing ? <ClipLoader size={12} /> : "Pay Now"}
                </button>
              </div>
              {submitError && (
                <small className="text-danger">{submitError}</small>
              )}
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Payment;
