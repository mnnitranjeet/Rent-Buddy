import React from 'react';


export default function About() {
  return (
    <div className='py-20 px-4 max-w-6xl mx-auto'>
      <div className='flex flex-col items-center text-center mb-12'>
        <h1 className='text-3xl font-bold mb-4 text-slate-800'>Founder</h1>
        <img
          src='./public/photo2.jpg'
          alt="Er. Ranjeet Kumar"
          className='w-32 h-32 mb-4 rounded-full object-cover'
        />
        <p className='mb-2 text-slate-700 text-xl'>Er. Ranjeet Kumar</p>
        <p className='mb-2 text-slate-700 text-lg'>Exam Cleared:</p>
        <ul className='text-slate-700 list-disc list-inside'>
          <li className='mb-2'>Polytechnique (2013)</li>
          <li className='mb-2'>JEE Mains (2016)</li>
          <li className='mb-2'>B.Tech (IIIT) (2016-2020)</li>
          <li className='mb-2'>Gate Qualified (2020)</li>
          <li className='mb-2'>SSC CHSL Pre & Mains (2021)</li>
          <li className='mb-2'>SSC CGL Pre (2021)</li>
          <li className='mb-2'>M.Tech (MNNIT Allahabad) (2023-2025)</li>
        </ul>
      </div>

      <div className='text-center'>
        <h1 className='text-3xl font-bold mb-4 text-slate-800'>About Rent Buddy</h1>
        <p className='mb-4 text-slate-700'>
          Rent Buddy is a leading real estate agency that specializes in helping clients buy, sell, and rent properties in the most desirable neighborhoods. Our team of experienced agents is dedicated to providing exceptional service and making the buying and selling process as smooth as possible.
        </p>
        <p className='mb-4 text-slate-700'>
          Our mission is to help our clients achieve their real estate goals by providing expert advice, personalized service, and a deep understanding of the local market. Whether you are looking to buy, sell, or rent a property, we are here to help you every step of the way.
        </p>
        <p className='mb-4 text-slate-700'>
          Our team of agents has a wealth of experience and knowledge in the real estate industry, and we are committed to providing the highest level of service to our clients. We believe that buying or selling a property should be an exciting and rewarding experience, and we are dedicated to making that a reality for each and every one of our clients.
        </p>
      </div>
    </div>
  );
}
