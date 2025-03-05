'use client'
import React, { useState } from 'react'
import ImageCarousel3D from './SubComponent/ImageCarousel3D'
import Summary from './SubComponent/Summary'

function LightCycle() {
  const [step, setStep] = useState<"1" | "2">("1")
  return (
    <div className='relative w-full h-full'>
      <div
        className={`absolute top-0 left-0 flex items-center justify-center w-full h-full transition-opacity duration-200 ${step === "1" ? "opacity-100 z-10" : "opacity-0 -z-10"}`}
      >
        <ImageCarousel3D setStep={setStep} />
      </div>

      <div className={`absolute top-0 left-0 flex items-center justify-center w-full h-full transition-opacity duration-500 ${step === "2" ? "opacity-100 z-10" : "opacity-0 -z-10"}`}>
        <Summary />
      </div>
    </div>
  )
}

export default LightCycle