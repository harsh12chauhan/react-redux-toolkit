import React from 'react'
import product from '../db.json';
import Card from '../Components/Card';
import { useSelector } from 'react-redux';

const Home = () => {

  const items =  useSelector(state=>state);
  console.log(items);

  const totalPrice  = items.cart.reduce((a, b) => a+b.price, 0);
  const data = product;

  return (
    <div>
      <div className='flex justify-between px-4 py-2  m-5'>
            <h3 className='border-2 p-2'>total items:{items.cart.length}</h3>
            <h3 className='border-2 p-2'>total price: ₹{totalPrice}</h3>
        </div>
        <div className='flex justify-around items-center flex-wrap mt-5'>
            {
                data.map((item,index)=>(
                    <Card key={index} product={item}/>
                ))
            }
        </div>
    </div>
  )
}

export default Home