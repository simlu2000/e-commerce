import React, { useState, useEffect } from "react";
import "../App.css";
import CheckoutButton from "./CheckoutButton";
const ToPay = ({ total, onCheckout }) => (
  <section>
    <div className="product">
      <div className="description">
        <h3>Total price: {total} $</h3>
      </div>
    </div>
    <form action="/create-checkout-session" method="POST">
      <CheckoutButton tot={total} onClick={onCheckout} />
    </form>
  </section>
);

const Message = ({ message }) => (
  <section>
    <p>{message}</p>
  </section>
);

export default function Pay({ priceToPay, onCheckout }) {
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);

    if (query.get("success")) {
      setMessage("Order placed! You will receive an email confirmation.");
    }

    if (query.get("canceled")) {
      setMessage(
        "Order canceled -- continue to shop around and checkout when you're ready."
      );
    }
  }, []);

  // Check if priceToPay is valid before rendering
  return message ? (
    <Message message={message} />
  ) : priceToPay ? (
    <ToPay total={priceToPay} onCheckout={onCheckout} />
  ) : (
    <p>No price available</p>
  );
}
