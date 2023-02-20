import React from 'react'

const Card = (props) => {
  return (
    <div className="container">
    <div className="row row-cols-1 row-cols-md-3 g-4">
      {props.products.map((product) => (
        <div className="col" key={product
        .id}>
          <div className="card h-100">
            <img src={product.image} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{product.title}</h5>
              <p className="card-text">
                  ${product.price}
              </p>
            </div>    
          </div>
        </div>
      ))}
    </div>
  </div>
  )
}

export default Card