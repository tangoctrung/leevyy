"use client"
import { formatTimeHourNormalDay, formatTimeNormalDay } from '@/utils'
import React, { useEffect, useState } from 'react'

function NormalDay() {
  const [time, setTime] = useState("00:00:00")
  useEffect(() => {
    const timeInterval = setInterval(() => {
      const time = formatTimeHourNormalDay()
      setTime(time)
    }, 1000)
    return () => {
      clearInterval(timeInterval)
    }
  }, [])
  return (
    <div className='relative w-full h-[100svh] flex flex-col  items-center overflow-hidden'>
      <div className='max-w-[96%] sm:max-w-[500px] w-fit p-5 rounded-2xl bg-[#2c325c] mt-[30svh]'>
        <p className='w-full text-center font-mono text-3xl font-bold'>{time}</p>
        <p className='mt-2 font-mono text-xl font-bold'>{formatTimeNormalDay()}</p>
      </div>
      <div className='mt-5 max-w-[96%] sm:max-w-[500px] w-fit p-5 rounded-2xl bg-[#2c325c]'>
        <p className='w-full font-mono text-sm font-bold'>Ngày lễ sắp tới: </p>
        <p className='mt-2 font-mono text-xl font-bold'>{formatTimeNormalDay()}</p>
      </div>
    </div>
  )
}

export default NormalDay