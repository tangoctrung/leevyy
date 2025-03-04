"use client"
import { DAYS } from '@/types'
import { returnTypeDays } from '@/utils'
import React, { useEffect, useState } from 'react'
import LunarNewYearDay from './ LunarNewYearDay'
import ValentineDay from './ ValentineDay'
import InternationalWomenDay from './InternationalWomenDay'
import VietnameseWomenDay from './VietnameseWomenDay'
import Birthday from './Birthday'
import NormalDay from './NormalDay'

function Subpage() {
  const [typeDay, setTypeDay] = useState<DAYS>("")

  useEffect(() => {
    let now = new Date()
    let day = now.getDate()
    let month = now.getMonth() + 1
    const type = process.env.NEXT_PUBLIC_TYPE_DAY as DAYS || returnTypeDays(day, month)
    setTypeDay(type)
  }, [])

  return (
    <div>
      {typeDay === "1/1" && <LunarNewYearDay />}
      {(typeDay === "14/2") && <ValentineDay />}
      {typeDay === "8/3" && <InternationalWomenDay />}
      {typeDay === "20/10" && <VietnameseWomenDay />}
      {typeDay === "25/10" && <Birthday />}
      {typeDay === "" && <NormalDay />}
    </div>
  )
}

export default Subpage