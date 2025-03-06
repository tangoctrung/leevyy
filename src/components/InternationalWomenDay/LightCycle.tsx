'use client'
import React from 'react'
import ImageCarousel3D from './SubComponent/ImageCarousel3D'

function LightCycle() {
  return (
    <div className='relative w-full h-full'>
      <div
        className={`absolute top-0 left-0 flex items-center justify-center w-full h-full transition-opacity duration-200 opacity-100 z-10`}
      >
        <ImageCarousel3D />
      </div>
    </div>
  )
}

export default LightCycle