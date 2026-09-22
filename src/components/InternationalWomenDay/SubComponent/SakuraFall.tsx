'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

type Star = {
  id: number;
  left: number;
  top: number;
  size: number;
  delay: number;
  duration: number;
  opacity: number;
};

type Snowflake = {
  id: number;
  left: number;
  size: number;
  delay: number;
  duration: number;
  drift: number;
  blur: number;
};

const SakuraFalling = () => {
  const [stars, setStars] = useState<Star[]>([]);
  const [snowflakes, setSnowflakes] = useState<Snowflake[]>([]);

  useEffect(() => {
    setStars(Array.from({ length: 100 }, (_, id) => ({
      id,
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: Math.random() * 2,
      delay: Math.random() * 5,
      duration: Math.random() * 3.5 + 2,
      opacity: Math.random() * 0.55 + 0.35,
    })));

    setSnowflakes(Array.from({ length: 30 }, (_, id) => ({
      id,
      left: Math.random() * 100,
      size: Math.random() * 10 + 5,
      delay: Math.random() * 8,
      duration: Math.random() * 8 + 8,
      drift: Math.random() * 150 - 75,
      blur: Math.random() > 0.82 ? 1.2 : 0,
    })));
  }, []);

  return (
    <>
      <div className="cosmic-scene fixed inset-0 z-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="cosmic-nebula" />
        <div className="cosmic-milky-way" />
        <div className="cosmic-stars">
          {stars.map((star) => (
            <span
              key={star.id}
              className="cosmic-star"
              style={{
                left: `${star.left}%`,
                top: `${star.top}%`,
                width: star.size,
                height: star.size,
                opacity: star.opacity,
                animationDelay: `${star.delay}s`,
                animationDuration: `${star.duration}s`,
              }}
            />
          ))}
        </div>
        <div className="cosmic-horizon" />
      </div>

      <div className="fixed inset-0 z-50 overflow-hidden pointer-events-none" aria-hidden="true">
        {snowflakes.map((snowflake) => (
          <motion.span
            key={snowflake.id}
            className="absolute top-0 block select-none leading-none"
            style={{
              left: `${snowflake.left}%`,
              fontSize: snowflake.size,
              filter: `blur(${snowflake.blur}px) drop-shadow(0 0 5px rgba(216, 240, 255, 0.9))`,
            }}
            initial={{ y: -30, x: 0, rotate: 0, opacity: 0 }}
            animate={{
              y: '106vh',
              x: [0, snowflake.drift, snowflake.drift * -0.35, snowflake.drift * 0.72],
              rotate: [0, 160, 360],
              opacity: [0, 0.9, 0.72, 0],
              scale: [0.8, 1, 0.88],
            }}
            transition={{
              duration: snowflake.duration,
              delay: snowflake.delay,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            🌸
          </motion.span>
        ))}
      </div>

      <style>{`
        .cosmic-scene {
          background: linear-gradient(180deg, #010208 0%, #030918 46%, #080b1d 72%, #0d0717 100%);
        }

        .cosmic-nebula {
          position: absolute;
          inset: -18%;
          opacity: 0.58;
          background:
            radial-gradient(ellipse at 12% 76%, rgba(29, 139, 163, 0.32), transparent 34%),
            radial-gradient(ellipse at 82% 18%, rgba(82, 84, 174, 0.3), transparent 37%),
            radial-gradient(ellipse at 68% 82%, rgba(174, 73, 129, 0.19), transparent 35%),
            radial-gradient(ellipse at 38% 36%, rgba(52, 102, 161, 0.2), transparent 29%);
          filter: blur(18px);
          animation: cosmicNebulaMove 18s ease-in-out infinite alternate;
        }

        .cosmic-milky-way {
          position: absolute;
          left: -22%;
          top: 43%;
          width: 145%;
          height: 24%;
          transform: rotate(-15deg);
          background:
            linear-gradient(180deg, transparent, rgba(161, 195, 222, 0.08) 28%, rgba(225, 218, 236, 0.18) 50%, rgba(107, 162, 196, 0.07) 72%, transparent),
            repeating-linear-gradient(90deg, transparent 0 18px, rgba(255, 255, 255, 0.04) 19px 20px, transparent 21px 38px);
          filter: blur(9px);
          opacity: 0.82;
        }

        .cosmic-stars {
          position: absolute;
          inset: 0;
        }

        .cosmic-star {
          position: absolute;
          display: block;
          border-radius: 50%;
          background: #f7fbff;
          box-shadow:
            0 0 5px rgba(229, 244, 255, 0.98),
            0 0 13px rgba(151, 202, 255, 0.58);
          animation: cosmicStarTwinkle 3s ease-in-out infinite;
        }

        .cosmic-star:nth-child(7n) {
          background: #ffe8ce;
          box-shadow: 0 0 5px rgba(255, 223, 186, 0.95), 0 0 13px rgba(255, 166, 142, 0.42);
        }

        .cosmic-star:nth-child(11n) {
          box-shadow: 0 0 7px #ffffff, 0 0 18px rgba(163, 214, 255, 0.76);
          transform: scale(1.2);
        }

        .cosmic-horizon {
          position: absolute;
          inset: auto -10% -16%;
          height: 42%;
          background:
            radial-gradient(ellipse at 50% 100%, rgba(68, 153, 188, 0.27), transparent 57%),
            linear-gradient(180deg, transparent, rgba(3, 9, 24, 0.52));
          filter: blur(4px);
        }

        @keyframes cosmicStarTwinkle {
          0%, 100% {
            opacity: 0.28;
            transform: scale(0.72);
          }
          48% {
            opacity: 1;
            transform: scale(1.45);
          }
          62% {
            opacity: 0.62;
            transform: scale(0.92);
          }
        }

        @keyframes cosmicNebulaMove {
          from {
            transform: translate3d(-1.5%, -1%, 0) scale(1);
          }
          to {
            transform: translate3d(1.5%, 1%, 0) scale(1.04);
          }
        }

        @media (max-width: 640px) {
          .cosmic-nebula {
            inset: -10% -42%;
          }

          .cosmic-milky-way {
            left: -60%;
            top: 40%;
            width: 220%;
            transform: rotate(-24deg);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .cosmic-nebula,
          .cosmic-star {
            animation: none;
          }
        }
      `}</style>
    </>
  );
};

export default SakuraFalling;
