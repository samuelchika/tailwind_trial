import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full my-32'>
      <div className='max-w-[1240px] mx-auto'>
        <div className='text-center'>
          <h2 className='text-5xl font-bold'>Trusted by Developers access across the world</h2>
          <p className='text-2xl py-6 text-grey-500'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus, atque excepturi cumque ducimus aspernatur vel reiciendis minus officiis unde, eaque deserunt esse laborum nostrum debitis consectetur quaerat rerum sapiente consequuntur.
          
          
          
          </p>
        </div>
        <div className='grid md:grid-cols-3 gap-1 px-2 text-center'>
          <div className='border py-8 rounded-xl shadow-xl'>
            <p className='text-6xl font-bold text-indigo-600'>100%</p>
            <p>Completion</p>
          </div>
          <div className='border py-8 rounded-xl shadow-xl'>
            <p className='text-6xl font-bold text-indigo-600'>24/7</p>
            <p>Delivery</p>
          </div>
          <div className='border py-8 rounded-xl shadow-xl'>
            <p className='text-6xl font-bold text-indigo-600'>100K</p>
            <p>Transaction</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About