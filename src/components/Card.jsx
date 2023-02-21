import React from "react";

const Card = ({products,name}) => {

  return (
    <div className="col" >
      <div className="card h-100">
        <img src={products.image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{products.title}</h5>
          <p className="card-text">${products.price} {name} </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
