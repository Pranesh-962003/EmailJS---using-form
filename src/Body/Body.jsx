import React from 'react'

const Body = () => {
  return (
    <div className='container mx-auto mt-12 flex'>
    <div className='w-1/2 text-center'>
      <p className='mt-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias nulla recusandae minima modi, sequi nisi non itaque. Eaque aperiam cumque nisi ipsam. Nesciunt porro corporis tenetur laudantium possimus non dolorem?</p>
      <button className='bg-indigo-500 text-white px-6 py-2 rounded-full mt-6 font-medium'>Get Started</button>
    </div>
    <div className='w-1/2'>
      <img src="/src/assets/img1.png" className='mx-auto' alt="" />
    </div>
    </div>
  )
}

export default Body