import React from 'react'

const ProductCard  = (props) => {
  return (
    <div className='product-card'> 
    {props.children}

    </div>
  )
}

export default ProductCard 