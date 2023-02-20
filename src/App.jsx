import { useState } from "react";
import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Products from "./components/Products";

function App() {
  const name = "Aung Thu Heain";
  const arry = [1, 2, 3, 4];
  const obj = { name: "aung thu heain", age: 20 };
  return (
    <div>
      <Navbar/>
       <Products/>
    </div>
  );
}

export default App;
