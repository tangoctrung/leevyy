import React, { ReactNode } from 'react'

type Props = {
  children?: ReactNode;
  isOpen?: boolean;
  setIsOpen?: any;
  onClose?: any;
}

function Modal({
  children,
  isOpen,
  setIsOpen,
  onClose,
}: Props) {

  function handleCloseModal() {
    setIsOpen(false);
    if (onClose) onClose()
  }

  // if (!isOpen) return <></>
  return (
    <div className={`fixed ${isOpen ? "top-0 left-0 w-[100svw] h-[100svh] z-[1000]" : "top-[45%] left-[45%] w-0 h-0 opacity-0 -z-10"} flex justify-center items-center transition-all duration-200`}>
      <div className="absolute top-0 left-0 w-full h-full z-[-1] cursor-pointer backdrop-blur"
        onClick={handleCloseModal}
        title='Click để đóng modal'
      ></div>
      <div className="flex justify-center items-center">
        {children}
      </div>
    </div>
  )
}

export default Modal