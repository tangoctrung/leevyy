'use client'
import { Icon } from '@iconify/react/dist/iconify.js'
import React, { useState } from 'react'
import { TypeAnimation } from 'react-type-animation'
import { motion } from 'framer-motion';

type Props = {
  onClick: any;
  stepMain: "start" | "cycle";
}
function Start({
  onClick,
  stepMain
}: Props) {
  const [step, setStep] = useState<"1" | "2" | "3">("1")
  const [isSound, setIsSound] = useState<boolean>(false)

  const handleClickNext = () => {
    onClick()
  }
  return (
    <div>
      <motion.div
        className='relative w-[96%] sm:w-[600px] aspect-[7/4] rounded-xl'
        initial={{ x: '-100vw', rotate: -45 }}
        animate={{ x: 0, rotate: 0 }}
        transition={{ type: 'spring', stiffness: 120, damping: 10 }}
      >
        <div className='absolute z-[-1] top-0 left-0 w-full h-full bg-[#0077b6] rounded-xl blur-[150px]'></div>
        <div
          className='w-full h-full  border-[1px] border-[#2888bc] rounded-xl p-5 overflow-scroll scrollbar-none'
          style={{ boxShadow: "#2888bc 0px 10px 50px" }}
        >
          {(stepMain === "start" && step === "1" || step === "2" || step === "3") &&
            <h2 className='w-full text-center font-sans text-3xl font-bold'>
              <TypeAnimation
                sequence={[
                  // Same substring at the start will only be typed once, initially
                  2000,
                  () => {
                    setIsSound(true);
                  },
                  'Lời mở đầu',
                  () => {
                    setStep('2');
                  },
                ]}
                speed={1}
              />
            </h2>}
          {(step === "2" || step === "3") &&
            <p className='mt-3 sm:text-base text-sm font-medium font-mono'>
              <TypeAnimation
                sequence={[
                  1000,
                  'Xin chào LeeVyy, đầu tiên anh muốn gửi lời chúc tốt đẹp nhất từ tận đáy lòng của anh đến em, chúc em một ngày 8/3 thật hạnh phúc và ý nghĩa.\n' +
                  'Đây là trang web đầu tiên mà anh làm chỉ để dành riêng cho một người (thực sự không nói xạo 😀😀😀).\n' +
                  'Anh mới bắt đầu làm cái này được mấy hôm thuii nên có lẽ vẫn còn hơi sơ xài xíu, mong em thích nó.\n' +
                  'Món quà đầu tiên mà anh muốn cho em xem đó chính là "Vòng quay ánh sáng".\n',
                  () => {
                    setIsSound(false);
                    setStep("3")
                  },
                ]}
                speed={20}
                style={{ whiteSpace: 'pre-line', height: '195px', display: 'block' }}
              />
            </p>}


        </div>
        {isSound &&
          <audio autoPlay loop hidden>
            <source src="/soundTypeKeyboard.mp3" type="audio/mpeg" />
          </audio>}
      </motion.div>
      {step === "3" &&
        <div className='mt-6 w-full flex justify-end'>
          <button
            className='w-[100px] h-[42px] hover:scale-[1.15] duration-200 flex items-center justify-center bg-gray-700 font-mono outline-none border-none rounded-lg cursor-pointer'
            title='Click me'
            onClick={handleClickNext}
          >
            <p className="text-sm font-bold">Tiếp</p>
            <div className='h-full w-[36px] flex justify-center items-center'>
              <Icon icon={"tdesign:gesture-click-filled"} className='iconClick w-6 h-6' />
            </div>
          </button>
        </div>
      }
    </div>
  )
}

export default Start