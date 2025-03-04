import React from 'react';
import Image from 'next/image';
import "./index.css"

function ImageCarousel3D() {
  return (
    <div className="containerLightCycle relative w-[300px] h-[180px]">
      <div className='itemContainerImage itemContainerImage1'>
        <Image
          src={"/images.jpeg"}
          width={200}
          height={400}
          alt=''
          className='itemImage'
        />
      </div>
      <div className='itemContainerImage itemContainerImage2'>
        <Image
          src={"/images.jpeg"}
          width={200}
          height={400}
          alt=''
          className='itemImage'
        />
      </div>
      <div className='itemContainerImage itemContainerImage3'>
        <Image
          src={"/images.jpeg"}
          width={200}
          height={400}
          alt=''
          className='itemImage'
        />
      </div>
      <div className='itemContainerImage itemContainerImage4'>
        <Image
          src={"/images.jpeg"}
          width={200}
          height={400}
          alt=''
          className='itemImage'
        />
      </div>
      <div className='itemContainerImage itemContainerImage5'>
        <Image
          src={"/images.jpeg"}
          width={200}
          height={400}
          alt=''
          className='itemImage'
        />
      </div>
    </div >
  );
}

export default ImageCarousel3D;