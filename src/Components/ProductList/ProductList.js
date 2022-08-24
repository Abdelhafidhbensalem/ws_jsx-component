import React from 'react'
import Card from '../Card/Card'

const ProductList = ({products,hello}) => {
  return (
    <div style={{display: 'flex', justifyContent: 'space-around',flexWrap: 'wrap' ,gap:10}}>
        {products.map(el=><Card key={el.id} el={el} hello={hello} />)}</div>
  )
}

export default ProductList