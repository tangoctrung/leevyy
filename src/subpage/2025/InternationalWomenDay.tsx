'use client'
import LightCycle from '@/components/InternationalWomenDay/LightCycle'
import Start from '@/components/InternationalWomenDay/Start'
import React, { useState } from 'react'

function InternationalWomenDay() {
  const [step, setStep] = useState<"start" | "cycle">("start")

  const handleStep = () => {
    setStep("cycle")
  }
  return (
    <div className='w-full h-[100svh] flex justify-center items-center'>
      {step === "start" && <Start onClick={handleStep} />}
      {step === "cycle" && <LightCycle />}
    </div>
  )
}

export default InternationalWomenDay