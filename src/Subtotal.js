import React, { useState } from "react";
import { NumericFormat } from "react-number-format";
import "./Subtotal.css";

function Subtotal() {
  // Sample basket data
  const [basket, setBasket] = useState([
    { id: 1, price: 29.99 },
    { id: 2, price: 49.99 },
  ]);

  // Function to calculate the total price of items in the basket
  const getBasketTotal = (basket) => {
    return basket.reduce((amount, item) => item.price + amount, 0);
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
              Subtotal ({basket.length} items): <strong>{value}</strong>
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
