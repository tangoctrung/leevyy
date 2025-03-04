import React from 'react'
import Modal from '../common/modal'
import { Icon } from "@iconify/react";
import Image from 'next/image'
import Link from 'next/link'

type Props = {
  isOpenModal: boolean;
  setIsOpenModal: any;
}
function ModalIntro({
  isOpenModal,
  setIsOpenModal
}: Props) {
  return (
    <Modal isOpen={isOpenModal} setIsOpen={setIsOpenModal} onClose={() => setIsOpenModal(false)}>
      <div className={`w-[96%] sm:w-[400px] max-h-[90svh] overflow-y-scroll scrollbar-thin scrollbar-thumb-sky-700 scrollbar-track-slate-700 p-5 relative rounded-lg bg-slate-700`}>
        <div className='absolute top-0 right-0 p-1 rounded-full bg-slate-400 cursor-pointer' onClick={() => setIsOpenModal(false)}>
          <Icon icon="iconamoon:close-bold" className='text-red-600' width={20} height={20} />
        </div>
        <div className='w-full'>
          <div className='w-[160px] h-[160px] rounded-full overflow-hidden'>
            <Image
              src={"/leevyy.jpeg"}
              width={500}
              height={500}
              className='w-full h-full object-cover'
              alt=''
            />
          </div>
          <p className='mt-2 font-mono text-xl font-semibold'>Nguyễn Lê Vy</p>
          <p className='mt-3 w-full h-[1px] bg-slate-300'></p>
          <div className='flex items-center justify-start mt-5'>
            <p className='w-[80px] text-sm font-sans'>Biệt danh: </p>
            <p className='w-[calc(100%-80px)] text-lg font-mono'>LeeVyy</p>
          </div>
          <div className='flex items-center justify-start mt-1'>
            <p className='w-[80px] text-sm font-sans'>Ngày sinh: </p>
            <p className='w-[calc(100%-80px)] text-lg font-mono'>25/10/2007 (Bọ Cạp)</p>
          </div>
          <div className='flex items-center justify-start mt-1'>
            <p className='w-[80px] text-sm font-sans'>Điện thoại: </p>
            <p className='w-[calc(100%-80px)] text-lg font-mono'>097.512.3067</p>
          </div>
          <div className='flex items-start justify-start mt-1'>
            <p className='w-[80px] text-sm font-sans'>Quê quán: </p>
            <p className='w-[calc(100%-80px)] mt-[-4px] text-lg font-mono'>Văn Lãng, Tân Dân, Phú Xuyên, Hà Nội</p>
          </div>
          <div className='flex items-start justify-start mt-1'>
            <p className='w-[80px] text-sm font-sans'>Yêu thích: </p>
            <p className='w-[calc(100%-80px)] mt-[-4px] text-lg font-mono'>Đồ ngọt như socola, trà sữa,... và những lời nói ngọt ngào</p>
          </div>
          <div className='flex items-start justify-start mt-1'>
            <p className='w-[80px] text-sm font-sans'>Liên lạc: </p>
            <div className='w-[calc(100%-80px)] flex text-lg font-mono'>
              <Link href={"https://www.facebook.com/lee.vyy.9066"} target='_blank' className='cursor-pointer'>
                <Icon icon={"logos:facebook"} className='w-6 h-6' />
              </Link>
              <div className='ml-3'></div>
              <Link href={"https://www.instagram.com/geurcjwjg_303/"} target='_blank' className='cursor-pointer'>
                <Icon icon={"skill-icons:instagram"} className='w-6 h-6' />
              </Link>
              <div className='ml-3'></div>
              <Link href={"https://www.tiktok.com/@vylee303_"} target='_blank' className='cursor-pointer'>
                <Icon icon={"logos:tiktok-icon"} className='w-6 h-6' />
              </Link>
            </div>
          </div>
          <p className='mt-5 w-full h-[1px] bg-slate-300'></p>
          <p className='mt-3'>Đây là trang web dành riêng cho LeeVyy nhé, vào mỗi dịp lễ nào đó, trang web sẽ cập nhật những giao diện mới, gửi lời chúc của anh đến LeeVyy. Hi vọng LeeVyy sẽ thích cái này...</p>
          <p className='mt-5 text-sm text-blue-500'>@Copyright by trungtn</p>
        </div>
      </div>
    </Modal>
  )
}

export default ModalIntro