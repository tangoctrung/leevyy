import { dataMemory } from '@/types'
import React from 'react'

function VietnameseWomenDay() {
  return (
    <div className='relative w-full h-[100svh] flex flex-col  items-center overflow-hidden'>
      <div className='max-w-[96%] sm:max-w-[500px] w-fit p-5 rounded-2xl bg-[#2c325c] mt-[30svh]'>
        <p className='text-xl font-semibold'>Một vài kỉ niệm: </p>
        {dataMemory.map((item: any, index: number) => (
          <div className='flex items-center gap-5 mt-2 ml-2' key={index}>
            &#9679;
            <p className='text-sm font-normal text-gray-300'>{item?.title}</p>
            <p className='font-semibold'>{item?.date}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default VietnameseWomenDay