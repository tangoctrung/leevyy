import React from 'react';
import Image from 'next/image';
import "./index.css"

function ImageCarousel3D() {

  function handleClickImage() {
    console.log("123");

  }
  return (
    <div className='relative'>
      <div className='absolute w-full h-full bg-slate-400 blur-[100px]'></div>
      <div className="containerLightCycle relative w-[300px] h-[180px]">
        <div className='itemContainerImage itemContainerImage1'>
          <Image
            src={"/gift.gif"}
            width={200}
            height={400}
            alt=''
            className='itemImage'
            onClick={handleClickImage}
          />
        </div>
        <div className='itemContainerImage itemContainerImage2'>
          <Image
            src={"/gift.gif"}
            width={200}
            height={400}
            alt=''
            className='itemImage'
            onClick={handleClickImage}
          />
        </div>
        <div className='itemContainerImage itemContainerImage3'>
          <Image
            src={"/gift.gif"}
            width={200}
            height={400}
            alt=''
            className='itemImage'
            onClick={handleClickImage}
          />
        </div>
        <div className='itemContainerImage itemContainerImage4'>
          <Image
            src={"/gift.gif"}
            width={200}
            height={400}
            alt=''
            className='itemImage'
            onClick={handleClickImage}
          />
        </div>
        <div className='itemContainerImage itemContainerImage5'>
          <Image
            src={"/gift.gif"}
            width={200}
            height={400}
            alt=''
            className='itemImage'
            onClick={handleClickImage}
          />
        </div>
      </div >
    </div>
  );
}

export default ImageCarousel3D;