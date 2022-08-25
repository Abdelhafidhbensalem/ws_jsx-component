import React from 'react'
import Card from '../Card/Card';
import PropTypes from 'prop-types'; // ES6


const ProductList = ({products,hello}) => {
  return (
    <div style={{display: 'flex', justifyContent: 'space-around',flexWrap: 'wrap' ,gap:10}}>
        {products.map(el=><Card key={el.id} el={el} hello={hello} />)}</div>
  )
}

ProductList.defaultProps={
  products:[{ "id": 6,
  "title": "abs",
  "description": "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
  "price": 899,
  "discountPercentage": 17.94,
  "rating": 4.44,
  "stock": 34,
  "brand": "Apple",
  "category": "smartphones",
  "thumbnail": "https://dummyjson.com/image/i/products/2/thumbnail.jpg",
  "images": [
    "https://dummyjson.com/image/i/products/2/1.jpg",
    "https://dummyjson.com/image/i/products/2/2.jpg",
    "https://dummyjson.com/image/i/products/2/3.jpg",
    "https://dummyjson.com/image/i/products/2/thumbnail.jpg"
  ]
}],
hello:()=>{alert("hello i'm default props")}
}

ProductList.propTypes={
products:PropTypes.array
}

export default ProductList