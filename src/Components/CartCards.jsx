import React from 'react'

const CartCards = ({product}) => {
  const{name,price} = product;
  return (
    <div className='flex justify-between px-4 py-2 border-2 m-5'>
        <div>
            <h3 className='text-2xl'>{name}</h3>
        </div>
        <div>
            <h3 className='text-2xl'>₹{price}</h3>
        </div>
    </div>
  )
}

export default CartCards