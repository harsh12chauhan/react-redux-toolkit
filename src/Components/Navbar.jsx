import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className=' border-3 shadow-lg'>
        <ul className='flex'>
            <li className='py-4 px-2 text-xl hover:text-gray-600'> <Link to='/'>Home</Link></li>
            <li className='py-4 px-2 text-xl hover:text-gray-600'> <Link to='/cart'>Cart</Link></li>
        </ul>
    </div>
  )
}

export default Navbar