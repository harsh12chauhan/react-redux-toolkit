import React from 'react'
import CartCards from '../Components/CartCards'
import product from '../db.json';
const Cart = () => {

  const data = product;

  return (
    <div>
        {
          data.map((item,index)=>(
            <CartCards key={index} product={item} />
          ))
        }
    </div>
  )
}

export default Cart