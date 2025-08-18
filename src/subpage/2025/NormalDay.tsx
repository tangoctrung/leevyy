"use client"
import { dataMemory } from '@/types'
import { formatTimeHolidayNormalDay, formatTimeHourNormalDay, formatTimeNormalDay } from '@/utils'
import React, { useEffect, useRef, useState } from 'react'

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

  const rainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (rainRef.current) {
      for (let i = 0; i < 80; i++) {
        const drop = document.createElement("div");
        drop.className = "raindrop";
        drop.style.left = Math.random() * 100 + "%";
        drop.style.animationDuration = 1 + Math.random() * 1 + "s";
        drop.style.opacity = (0.2 + Math.random() * 0.5).toString();
        rainRef.current.appendChild(drop);
      }
    }
  }, []);

  return (
    <div className='relative w-full h-screen bg-gray-900 flex flex-col items-center overflow-hidden'>
      <div className="absolute inset-0 bg-gradient-to-b from-gray-800 to-black opacity-80" />
      <div ref={rainRef} className="absolute inset-0 pointer-events-none overflow-hidden" />
      <div className='relative max-w-[96%] sm:max-w-[500px] w-fit p-5 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-950 border border-slate-700 mt-[30svh]'>
        <p className='w-full text-center font-mono text-xl sm:text-3xl font-bold'>{time}</p>
        <p className='mt-2 font-mono text-lg font-bold'>{formatTimeNormalDay()}</p>
        <p className='text-lg mt-3 font-semibold'>Một vài kỉ niệm: </p>
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

export default NormalDay