'use client'
import React from 'react'
import ImageCarousel3D from './SubComponent/ImageCarousel3D'

function LightCycle() {
  return (
    <div className='relative w-full h-full'>
      <div
        className='flex items-center justify-center h-full'
      >
        <ImageCarousel3D />
      </div>
    </div>
  )
}

export default LightCycle