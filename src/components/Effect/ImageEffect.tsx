'use client';

import { motion } from 'framer-motion';

const ROWS = 4;
const COLS = 6;

type Props = {
  imageUrl: string;
  isVisible: boolean;
}
const ImageEffect = ({
  imageUrl,
  isVisible
}: Props) => {

  const tiles = [];
  for (let i = 0; i < ROWS; i++) {
    for (let j = 0; j < COLS; j++) {
      tiles.push({ x: j, y: i });
    }
  }

  return (
    <div className="relative  w-full h-full flex flex-col items-center justify-center overflow-hidden">
      <div className="relative w-[700px] h-[405px] object-cover">
        {tiles.map((tile, index) => (
          <motion.div
            key={index}
            className="absolute bg-cover bg-no-repeat"
            style={{
              width: `${700 / COLS}px`,
              height: `${405 / ROWS}px`,
              left: `${(tile.x * 700) / COLS}px`,
              top: `${(tile.y * 405) / ROWS}px`,
              backgroundImage: `url(${imageUrl})`,
              backgroundSize: `700px 405px`,
              backgroundPosition: `-${(tile.x * 700) / COLS}px -${(tile.y * 405) / ROWS}px`,
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isVisible ? { opacity: 1, zIndex: 100, scale: 1 } : { opacity: 0, zIndex: -100, x: (Math.random() - 0.5) * 300, y: (Math.random() - 0.5) * 300, rotate: Math.random() * 360 }}
            transition={{ duration: 1.5 }}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageEffect