import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
const App = () => {
  const [name, setName] = useState(true);
  const [image, setImage] = useState(true);
  const changeHandelar = () => {
    setName(!name);
    setImage(!image);
  };
  
  return (
    <>
      {/* <Navbar />
      <Products /> */}

      {name ? "Image one" : "Image two"}
      <img
        src={
          image
            ? "https://i.pinimg.com/236x/96/80/36/968036d1765219006693708e18172c20.jpg"
            : "https://i.pinimg.com/236x/e0/d2/a6/e0d2a6ecef581662cfbb06cf39513a9b.jpg"
        }
        class="img-fluid rounded-top"
        alt=""
      />
 
      <button onClick={changeHandelar} className="btn btn-danger">
        Change
      </button>
    </>
  );
};

export default App;
