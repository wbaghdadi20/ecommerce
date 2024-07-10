import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home-container">
        <img
          className="home-image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        />
        <div className="home-row">
          <Product
            id="12345678"
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
            price={19.99}
            img="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTzGuFemqbp5yNmbvif_aCQ8uKX9Lc3y5t7GEpPcvKhukWoNOwdbNxNHwtQYI47aOiLlM0yVXXRgJi7yaH5P_LjmnXhZY0nHQsVF-QkFtux2NEp38yfiz10lA&usqp=CAc"
            rating={5}
          />
          <Product
            id="49538094"
            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Liter Glass Bowl"
            price={239.0}
            rating={4}
            img="https://m.media-amazon.com/images/I/71icvFhLeCL.__AC_SX300_SY300_QL70_FMwebp_.jpg"
          />
        </div>
        <div className="home-row">
          <Product
            id="4903850"
            title="Fitbit Versa 4 Fitness Smartwatch, One Size (S & L Bands Included)"
            price={199.99}
            rating={3}
            img="https://m.media-amazon.com/images/I/61OEuoqFqYL._AC_SL1500_.jpg"
          />
          <Product
            id="23445930"
            title="Amazon Echo (3rd Generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={98.99}
            rating={5}
            img="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
          />
          <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            rating={4.3}
            img="https://m.media-amazon.com/images/I/815KnP2wjDS.__AC_SY445_SX342_QL70_FMwebp_.jpg"
          />
        </div>
        <div className="home-row">
          <Product
            id="90829332"
            title='Samsung LC49RG90SSUXEN 49" Curved LED Gaming Monitor'
            price={1094.98}
            rating={4}
            img="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
