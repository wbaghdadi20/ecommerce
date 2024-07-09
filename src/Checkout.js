import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";

function Checkout() {
  return (
    <div className="checkout">
      <div className="checkout-left">
        <img
          className="checkout-ad"
          src="https://th.bing.com/th/id/R.c364afe759afca452bbfdbd43d40cbc4?rik=r3BOhu%2bsSenX7A&riu=http%3a%2f%2fg-ecx.images-amazon.com%2fimages%2fG%2f31%2fprime%2fPEX%2fPeX-Top-PC-1500X375.jpg&ehk=niVCn8KTThvOrjsnL6kURXXsNdedwHHW047UdK8B47w%3d&risl=&pid=ImgRaw&r=0"
        />
        <div>
          <h2 className="checkout-title">Your Shopping Basket</h2>
          {/* Basket Item */}
          {/* Basket Item */}
          {/* Basket Item */}
          {/* Basket Item */}
          {/* Basket Item */}
        </div>
      </div>
      <div className="checkout-right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
