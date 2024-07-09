import React from "react";
import "./Product.css";
import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import { useStateValue } from "./StateProvider";
import { type } from "@testing-library/user-event/dist/type";

function Product({ id, title, price, img, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  console.log("This is the basket >>>", basket);

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        price: price,
        img: img,
        rating: rating,
      },
    });
  };

  return (
    <div className="product">
      <div className="product-info">
        <p>{title}</p>
        <p className="product-price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product-rating">
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
      </div>
      <img src={img} alt={title} />
      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}

export default Product;
