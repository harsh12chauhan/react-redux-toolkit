import React from 'react'

const Card = ({product}) => {
    const{name,price} = product;
  return (
    <div className='flex justify-between items-center m-5'>
        <div className=' bg-red-200 p-5 rounded-lg'>
            <h3 className=' text-3xl '>{name}</h3>
            <h3 className=' text-xl text-black-900'>₹ {price}</h3>
            <div className='mt-5'>
                <button className=' text-white bg-blue-600 py-2 px-4 rounded-lg hover:bg-blue-700'>Add to Cart</button>
            </div>
        </div>
    </div>
  )
}

export default Card