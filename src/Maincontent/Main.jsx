import React from 'react'

const Main = () => {
  return (
    <div className='container mx-auto flex mt-12'>
        <div className='w-1/3 text-center flex flex-col items-center'>
            <h1>Mern Development</h1>
            <img className='h-40 -w-40'  src="/src/assets/web.png" alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos iusto iste consectetur, repudiandae tempore dignissimos at eos quibusdam. Sint ducimus ad dolor .</p>
        </div>
        <div className='w-1/3 text-center flex flex-col items-center'>
            <h1>App Development</h1>
            <img className='h-40 w-40' src="/src/assets/mobile.png" alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos iusto iste consectetur, repudiandae tempore dignissimos at eos quibusdam. Sint ducimus ad dolor .</p>
        </div>
        <div className='w-1/3 text-center flex flex-col items-center'>
            <h1>Design</h1>
            <img className='h-40 w-40' src="/src/assets/design.png" alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos iusto iste consectetur, repudiandae tempore dignissimos at eos quibusdam. Sint ducimus ad dolor.</p>
        </div>
    </div>
  )
}

export default Main