import React, { useState } from "react";
import { NumericFormat } from "react-number-format";
import "./Subtotal.css";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./Reducer";
import { Link, useNavigate } from "react-router-dom";

function Subtotal() {
  const navigate = useNavigate();
  const [{ basket }, dispatch] = useStateValue();

  const handleProceedToCheckout = (e) => {
    basket?.length
      ? navigate("/payment")
      : alert("Your basket is empty. Add items to proceed to checkout.");
  };

  return (
    <div className="subtotal">
      <NumericFormat
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        decimalScale={2}
        prefix={"$"}
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket?.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal_gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
      />
      <button onClick={handleProceedToCheckout}>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
