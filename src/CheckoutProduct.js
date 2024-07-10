import React from "react";
import "./CheckoutProduct.css";
import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import { useStateValue } from "./StateProvider";

function CheckoutProduct({ id, title, price, img, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  return (
    <div className="checkout-product">
      <img className="checkoutProduct-image" src={img} />

      <div className="checkoutProduct-info">
        <p className="checkoutProduct-title">{title}</p>
        <p className="checkoutProduct-price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct-rating">
          {[...Array(5)].map((_, i) => {
            const roundedRating = Math.round(rating * 2) / 2;
            if (i < Math.floor(roundedRating)) {
              return <StarIcon key={id} />;
            } else if (i < roundedRating) {
              return <StarHalfIcon key={id} />;
            } else {
              return <StarOutlineIcon key={id} />;
            }
          })}
        </div>
        <button onClick={removeFromBasket}>Remove From Basket</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
