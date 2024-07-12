import React from "react";
import "./Order.css";
import moment from "moment";
import CheckoutProduct from "./CheckoutProduct";
import { NumericFormat } from "react-number-format";

function Order({ order }) {
  return (
    <div className="order">
      <h2>Order</h2>
      <p>{moment.unix(order.data.created).format("MMMM Do YYYY, h:mma")}</p>
      <p className="order-id">
        <small>{order.id}</small>
      </p>
      {order.data.basket?.map((item) => (
        <CheckoutProduct
          id={item.id}
          title={item.title}
          img={item.img}
          price={item.price}
          rating={item.rating}
          hideButton
        />
      ))}
      <NumericFormat
        value={order.data.amount / 100}
        displayType={"text"}
        thousandSeparator={true}
        decimalScale={2}
        prefix={"$"}
        renderText={(value) => (
          <h3 className="order-total">Order Total: {value}</h3>
        )}
      />
    </div>
  );
}

export default Order;
