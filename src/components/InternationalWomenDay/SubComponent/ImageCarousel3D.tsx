import React, { useState } from 'react';
import Image from 'next/image';
import "./index.css"
import { TypeAnimation } from 'react-type-animation';

function ImageCarousel3D() {

  const [isSound, setIsSound] = useState<boolean>(false)
  const [indexImage, setIndexImage] = useState(0)
  const [imageChoosed, setImageChoosed] = useState({
    image1: "/gift.gif",
    image2: "/gift.gif",
    image3: "/gift.gif",
    image4: "/gift.gif",
    image5: "/gift.gif",
  })
  const [dataClick, setDataClick] = useState<{ image: string, text: string }>({
    image: "",
    text: ""
  })
  const dataLightCycle = [
    {
      // image: "/leevyy1.jpeg",
      image: "/images.jpeg",
      text: "Xin chao levyy 1",
    },
    {
      // image: "/leevyy5.png",
      image: "/images.jpeg",
      text: "Xin chao levyy 1",
    },
    {
      // image: "/leevyy3.jpeg",
      image: "/images.jpeg",
      text: "Xin chao levyy 1",
    },
    {
      // image: "/leevyy2.jpeg",
      image: "/images.jpeg",
      text: "Xin chao levyy 1",
    },
    {
      // image: "/leevyy4.png",
      image: "/images.jpeg",
      text: "Xin chao levyy 1",
    }
  ]
  function handleClickImage(name: "image1" | "image2" | "image3" | "image4" | "image5") {
    if (imageChoosed[`${name}`] !== "/gift.gif") {
      return
    }
    setImageChoosed({
      ...imageChoosed,
      [name]: dataLightCycle[indexImage].image
    })
    setDataClick(dataLightCycle[indexImage])
    setIndexImage(i => i + 1)
  }

  console.log({ dataClick });

  return (
    <div className='relative'>
      <div className='absolute w-full h-full bg-slate-400 blur-[100px]'></div>
      <div className="containerLightCycle relative w-[300px] h-[180px]">
        <div className='itemContainerImage itemContainerImage1'>
          <Image
            src={imageChoosed.image1}
            width={400}
            height={800}
            alt=''
            className='itemImage'
            onClick={() => handleClickImage("image1")}
          />
        </div>
        <div className='itemContainerImage itemContainerImage2'>
          <Image
            src={imageChoosed.image2}
            width={400}
            height={800}
            alt=''
            className='itemImage'
            onClick={() => handleClickImage("image2")}
          />
        </div>
        <div className='itemContainerImage itemContainerImage3'>
          <Image
            src={imageChoosed.image3}
            width={400}
            height={800}
            alt=''
            className='itemImage'
            onClick={() => handleClickImage("image3")}
          />
        </div>
        <div className='itemContainerImage itemContainerImage4'>
          <Image
            src={imageChoosed.image4}
            width={400}
            height={800}
            alt=''
            className='itemImage'
            onClick={() => handleClickImage("image4")}
          />
        </div>
        <div className='itemContainerImage itemContainerImage5'>
          <Image
            src={imageChoosed.image5}
            width={400}
            height={800}
            alt=''
            className='itemImage'
            onClick={() => handleClickImage("image5")}
          />
        </div>
      </div >

      <div className={`fixed left-0 top-0 w-[100svw] h-[100svh] z-[900]`}>
        <div className={`w-full h-full flex mt-[20svh] items-center flex-col`}>
          {dataClick.image && <div className='max-w-[700px] w-[90%] rounded-xl aspect-[2/1] overflow-hidden'>
            <Image
              src={dataClick.image || ""}
              width={1800}
              height={900}
              alt=''
              className='w-full h-full object-cover'
            />
          </div>}
          <div className='mt-3 max-w-[700px] w-[90%] rounded-md bg-gray-600/80 p-2'>
            <h3 className='w-full text-center font-sans text-base font-semibold'>
              <TypeAnimation
                sequence={[
                  // Same substring at the start will only be typed once, initially
                  1000,
                  () => {
                    setIsSound(true);
                  },
                  dataClick.text,
                  () => {
                    setIsSound(false);
                  },
                ]}
                speed={10}
              />
            </h3>
          </div>
        </div>
      </div>
      {isSound &&
        <audio autoPlay loop hidden>
          <source src="/soundTypeKeyboard.mp3" type="audio/mpeg" />
        </audio>}
    </div>
  );
}

export default ImageCarousel3D;