import { sendMessageTelegram } from '@/utils';
import React, { useState } from 'react'
import { TypeAnimation } from 'react-type-animation';

function Summary() {
  const [isSound, setIsSound] = useState<boolean>(false)
  const [isShowButton, setIsShowButton] = useState(false)
  const handleClickButton = (text: string) => {
    sendMessageTelegram(text)
    setTimeout(() => {
      window.location.reload()
    }, 2000)
  }

  return (
    <div className='w-full h-full flex flex-col items-center mt-[30svh]'>
      <div className='w-[70%]'>
        <p className='mt-3 sm:text-base text-sm font-medium font-mono'>
          <TypeAnimation
            sequence={[
              2000,
              () => {
                setIsSound(true);
                setIsShowButton(false);
              },
              'Vậy là cũng đến phần kết rùi nè, nó hơi ngắn một xíu, nhưng mà lần sau anh sẽ lên nhiều ý tưởng để cho nó hấp dẫn hơn nha, hihi.\n' +
              'Tiếp đến đây anh có thể hỏi em một câu được khum, trước anh có hỏi rùi nhưng mà chưa được nghe em trả lời, chúng ta sẽ bước vào mối quan hệ tìm hiểu nhau, em đồng ý khumm :)))',
              () => {
                setIsSound(false);
                setIsShowButton(true)
              },
            ]}
            speed={90}
            style={{ whiteSpace: 'pre-line', height: '195px', display: 'block' }}
          />
        </p>
      </div>
      {isShowButton &&
        <div className='flex items-center'>
          <button className='outline-none border-none py-3 px-5 rounded-xl bg-slate-600'
            onClick={() => handleClickButton("Dongy")}
          >
            Em đồng ý
          </button>
          <div className='w-5'></div>
          <button className='outline-none border-none py-3 px-5 rounded-xl bg-slate-600'
            onClick={() => handleClickButton("Suynghithem")}
          >
            Em muốn suy nghĩ thêm
          </button>
        </div>}
      {isSound &&
        <audio autoPlay loop hidden>
          <source src="/soundTypeKeyboard.mp3" type="audio/mpeg" />
        </audio>}
    </div>
  )
}

export default Summary