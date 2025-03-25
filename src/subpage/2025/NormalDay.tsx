"use client"
import { formatTimeHolidayNormalDay, formatTimeHourNormalDay, formatTimeNormalDay } from '@/utils'
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
        <p className='w-full text-center font-mono text-xl sm:text-3xl font-bold'>{time}</p>
        <p className='mt-2 font-mono text-lg font-bold'>{formatTimeNormalDay()}</p>
        <p className='text-center font-mono text-[12px] font-medium text-gray-400'>Ngày sắp tới: {formatTimeHolidayNormalDay()}</p>
        <p className='text-center font-mono text-[12px] font-medium text-gray-400'>(Hãy đến đây vào ngày này nhé)</p>
      </div>
    </div>
  )
}

export default NormalDay