import React, { useState } from "react";
import { NumericFormat } from "react-number-format";
import "./Subtotal.css";
import { useStateValue } from "./StateProvider";

const getBasketTotal = (basket) => {
  return basket?.reduce((amount, item) => item.price + amount, 0);
};

function Subtotal() {
  // Sample basket data
  const [{ basket }, dispatch] = useStateValue();

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
      <button>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
