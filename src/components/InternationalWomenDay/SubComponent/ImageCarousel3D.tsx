import React, { useState } from 'react';
import Image from 'next/image';
import "./index.css"
import { TypeAnimation } from 'react-type-animation';
import { Icon } from '@iconify/react/dist/iconify.js';
import Modal from '@/components/common/modal';
import SakuraFalling from './SakuraFall';

type Props = {
  setStep: any
}
function ImageCarousel3D({
  setStep,
}: Props) {

  const [isComplete, setIsComplete] = useState(false)
  const [isOpenModal, setIsOpenModal] = useState(false)
  const [isSound, setIsSound] = useState<boolean>(false)
  const [isShowClose, setIsShowClose] = useState(false)
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
      image: "/leevyy1.jpeg",
      // image: "/images.jpeg",
      text: "Xin chào bé iu, 8/3 đầu tiên anh gặp được em nè, hi vọng em có một ngày thật là ý nghĩa. Dù chỉ là mới quen, nhưng mà chúc em:\n" +
        "Một ngày hạnh phúc,\n" +
        "một đời bình yên,\n" +
        "cuộc sống không ưu phiền,\n" +
        "và có anh kề bên.\n" +
        "😊😊😊😊😊",
    },
    {
      image: "/leevyy5.png",
      // image: "/images.jpeg",
      text: "Hic, em nhìn ảnh này xem, giống đứa bé lớp 7 quá, nhưng mà cũm cute siêu đỉnh luôn😍😍😍\n" +
        "Ai da, bây giờ muốn nựng má em quá, siêu nhớ bé cưng luôn.\n" +
        "À hôm nay có ai tặng hoa cũm bảo là mình có mối khác rồi nhé 😒😒😒, đừng có mà nhận hoa xong nhận tình cảm của người ta đó 😌😌😌.",
    },
    {
      image: "/leevyy3.jpeg",
      // image: "/images.jpeg",
      text: "Wow, hãy nhìn công chúa của anh nè, không biết em có ghen tỵ không, chứ anh hơi bị ghen tỵ vì nhan sắc siêu phẩm này nha.\n" +
        "Môi thơm quá đi, lần gặp tới em biết phải làm gì rùi đó😉😉😉,"
    },
    {
      image: "/leevyy2.jpeg",
      // image: "/images.jpeg",
      text: "Em định lườm ai zậy trời, nhìn ghéc vãi. Anh mà ở đấy là búng mũi em đó biết chưa😚😚😚\n" +
        "Anh có bài thơ này tặng em nè, nhưng mà mở nốt hộp quà cuối nha, hehe\n"
    },
    {
      image: "/leevyy4.png",
      // image: "/images.jpeg",
      text: "Tặng em bài thơ này nè\n" +
        "Đời anh sẽ chỉ là màn đêm\n" +
        "Nếu như không bao giờ em đến\n" +
        "Đời anh sẽ vô cùng hạnh phúc\n" +
        "Nếu như đã có em kề bên\n" +
        "Màn đêm trong anh phủ bầu trời\n" +
        "Cô đơn đau khổ khắp mọi nơi\n" +
        "Nhưng khi em vừa mới bước vào\n" +
        "Nó đã trở thành nơi tuyệt vời\n" +
        "Bài thơ còn một khúc nữa, nhưng mà anh sẽ đọc cho em nghe vào một dịp đặc biệt nha😚😚😚"
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

  function handleCloseImage() {
    setDataClick({
      image: "",
      text: ""
    })
    setIsShowClose(false)
    if (indexImage >= 5) {
      setIsComplete(true)
    }
  }

  function handleClickGuide() {
    setIsOpenModal(true)
  }

  function handleComplete() {
    setStep("2")
  }

  return (
    <div className='relative'>
      {!isComplete &&
        <div className='fixed left-[20px] top-10'>
          <button
            className='w-[130px] h-[42px] hover:scale-[1.15] opacity-40 duration-200 flex items-center justify-center bg-gray-700 font-mono outline-none border-none rounded-lg cursor-pointer'
            title='Click me'
            onClick={handleClickGuide}
          >
            <p className="text-sm font-bold">Hướng dẫn</p>
            <div className='h-full w-[36px] flex justify-center items-center'>
              <Icon icon={"tdesign:gesture-click-filled"} className='iconClick w-6 h-6' />
            </div>
          </button>
        </div>}
      {isComplete &&
        <div className='absolute left-[50%] translate-x-[-50%] bottom-[-200px]'>
          <button
            className='w-[130px] h-[42px] hover:scale-[1.15] opacity-90 duration-200 flex items-center justify-center bg-gray-700 font-mono outline-none border-none rounded-lg cursor-pointer'
            title='Click me'
            onClick={handleComplete}
          >
            <p className="text-sm font-bold">Qua màn</p>
            <div className='h-full w-[36px] flex justify-center items-center'>
              <Icon icon={"tdesign:gesture-click-filled"} className='iconClick w-6 h-6' />
            </div>
          </button>
        </div>}
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

      <div className={`fixed left-0 top-0 w-[100svw] h-[100svh] transition-all duration-300 
        ${dataClick.image ? "z-[900] opacity-100 " : "-z-10 opacity-0"} 
      `}
      >
        <div className={`w-full h-full flex mt-[20svh] items-center flex-col`}>
          {dataClick.image &&
            <div className='relative max-w-[700px] w-[90%] rounded-xl aspect-[5/3] overflow-hidden'>
              <Image
                src={dataClick.image || ""}
                width={1800}
                height={900}
                alt=''
                className='w-full h-full object-cover'
              />
              <div className='absolute top-0 right-[0%] max-w-[50%] rounded-md bg-gray-600/30 p-2 flex justify-center'>
                <h3 className='w-fit font-mono text-base font-semibold'>
                  <TypeAnimation
                    sequence={[
                      // Same substring at the start will only be typed once, initially
                      1000,
                      () => {
                        setIsSound(true);
                        setIsShowClose(false);
                      },
                      dataClick.text,
                      () => {
                        setIsSound(false);
                        setIsShowClose(true);
                      },
                    ]}
                    speed={20}
                    style={{ whiteSpace: 'pre-line', display: 'block' }}
                  />
                </h3>
              </div>
              {isShowClose &&
                <div
                  className='absolute top-0 left-0 cursor-pointer p-1 rounded-full bg-gray-200 font-mono font-semibold text-sm'
                  onClick={handleCloseImage}
                >
                  <Icon icon="iconamoon:close-bold" className='text-red-600' />
                </div>}
            </div>}

        </div>
      </div>
      <Modal isOpen={isOpenModal} setIsOpen={setIsOpenModal}>
        <div className='p-5 rounded-xl w-[360px] bg-slate-700'>
          Ở đây có 5 phần quà, em ấn vào từng phần quà nó sẽ hiện ảnh và thông điệp anh muốn gửi đến em, khi thông điệp chạy xong sẽ hiện một nút để tắt ở góc trên bên trái nhé, và em mở xong 5 phần quà là hoàn thành, khi đó sẽ hiện nút Qua màn, em ấn vào nút đó nhé :))
        </div>
      </Modal>
      {isSound &&
        <audio autoPlay loop hidden>
          <source src="/soundTypeKeyboard.mp3" type="audio/mpeg" />
        </audio>}

      {isComplete && <SakuraFalling />}
    </div>
  );
}

export default ImageCarousel3D;