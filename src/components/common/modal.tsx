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

  if (!isOpen) return <></>
  return (
    <div className="w-[100svw] h-[100svh] fixed top-0 left-0 flex justify-center items-center z-50">
      <div className="absolute top-0 left-0 w-full h-full z-[-1] bg-bg2/20 cursor-pointer backdrop-blur" onClick={handleCloseModal} title='Click để đóng modal'></div>
      <div className="flex justify-center items-center">
        {children}
      </div>
    </div>
  )
}

export default Modal