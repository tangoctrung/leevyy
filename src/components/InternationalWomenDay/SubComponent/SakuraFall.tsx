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

type Petal = {
  id: number;
  left: number;
  size: number;
  delay: number;
  duration: number;
  drift: number;
};

const SakuraFalling = () => {
  const [stars, setStars] = useState<Star[]>([]);
  const [petals, setPetals] = useState<Petal[]>([]);

  useEffect(() => {
    setStars(Array.from({ length: 200 }, (_, id) => ({
      id,
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: Math.random() * 2,
      delay: Math.random() * 5,
      duration: Math.random() * 3.5 + 2,
      opacity: Math.random() * 0.55 + 0.35,
    })));

    setPetals(Array.from({ length: 24 }, (_, id) => ({
      id,
      left: Math.random() * 100,
      size: Math.random() * 10 + 6,
      delay: Math.random() * 5,
      duration: Math.random() * 6 + 7,
      drift: Math.random() * 120 - 60,
    })));
  }, []);

  return (
    <>
      <div className="cosmic-scene fixed inset-0 z-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="cosmic-nebula" />
        <div className="cosmic-milky-way" />
        <div className="cosmic-planet cosmic-planet-ringed" />
        <div className="cosmic-planet cosmic-planet-blue" />
        <div className="cosmic-planet cosmic-planet-distant" />
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
        {petals.map((petal) => (
          <motion.span
            key={petal.id}
            className="absolute top-0 block select-none leading-none"
            style={{
              left: `${petal.left}%`,
              fontSize: petal.size,
              filter: 'drop-shadow(0 7px 7px rgba(112, 35, 78, 0.28))',
            }}
            initial={{ y: -30, x: 0, rotate: 0, opacity: 0 }}
            animate={{
              y: '106vh',
              x: [0, petal.drift, petal.drift * -0.35, petal.drift * 0.72],
              rotate: [0, 160, 360],
              opacity: [0, 0.9, 0.72, 0],
              scale: [0.8, 1, 0.88],
            }}
            transition={{
              duration: petal.duration,
              delay: petal.delay,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            ❄️
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

        .cosmic-planet {
          position: absolute;
          z-index: 1;
          border-radius: 50%;
          box-shadow:
            inset -22px -15px 28px rgba(0, 3, 18, 0.68),
            inset 8px 7px 15px rgba(218, 240, 255, 0.2),
            0 0 28px rgba(112, 171, 215, 0.16);
        }

        .cosmic-planet::before {
          content: "";
          position: absolute;
          inset: 0;
          z-index: 2;
          border-radius: 50%;
          background:
            radial-gradient(circle at 27% 23%, rgba(255, 255, 255, 0.38), transparent 22%),
            linear-gradient(112deg, transparent 45%, rgba(3, 7, 24, 0.18) 67%, rgba(0, 2, 14, 0.56) 100%);
          box-shadow: inset 0 0 13px rgba(222, 240, 255, 0.16);
        }

        .cosmic-planet-ringed {
          top: 12%;
          right: 8%;
          width: clamp(88px, 11vw, 150px);
          aspect-ratio: 1;
          background:
            radial-gradient(ellipse at 42% 27%, rgba(250, 218, 169, 0.64) 0 13%, transparent 30%),
            radial-gradient(circle at 35% 31%, #d9ad7c 0%, #b77a5f 43%, #774658 72%, #27223e 100%);
          animation: cosmicRingedDrift 14s ease-in-out infinite;
        }

        .cosmic-planet-ringed::after {
          content: "";
          position: absolute;
          z-index: -1;
          left: -38%;
          top: 36%;
          width: 176%;
          height: 28%;
          border: clamp(5px, 0.7vw, 10px) solid rgba(223, 192, 151, 0.72);
          border-left-color: rgba(129, 94, 78, 0.5);
          border-radius: 50%;
          transform: rotate(-14deg);
          box-shadow: 0 0 12px rgba(221, 185, 147, 0.2);
        }

        .cosmic-planet-blue {
          left: 7%;
          bottom: 16%;
          width: clamp(58px, 7vw, 96px);
          aspect-ratio: 1;
          background:
            radial-gradient(ellipse at 33% 30%, rgba(153, 235, 220, 0.7) 0 10%, transparent 24%),
            radial-gradient(ellipse at 32% 61%, #3e9b83 0 13%, transparent 14%),
            radial-gradient(ellipse at 67% 35%, #357e75 0 10%, transparent 11%),
            radial-gradient(circle at 34% 28%, #3dacc0 0%, #236e91 45%, #193e69 72%, #111c42 100%);
          animation: cosmicBlueDrift 17s ease-in-out -4s infinite;
        }

        .cosmic-planet-distant {
          left: 22%;
          top: 14%;
          width: clamp(34px, 4vw, 58px);
          aspect-ratio: 1;
          opacity: 0.7;
          background:
            radial-gradient(circle at 32% 28%, #d7c0d9, transparent 17%),
            linear-gradient(145deg, #8c769e, #453c6d 62%, #191a3b);
          filter: blur(0.3px);
          animation: cosmicDistantDrift 21s ease-in-out -7s infinite;
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

        @keyframes cosmicRingedDrift {
          0%, 100% {
            transform: translate3d(-5px, 3px, 0) rotate(-2deg);
          }
          50% {
            transform: translate3d(9px, -9px, 0) rotate(3deg);
          }
        }

        @keyframes cosmicBlueDrift {
          0%, 100% {
            transform: translate3d(-7px, 7px, 0) rotate(-3deg);
          }
          45% {
            transform: translate3d(6px, -8px, 0) rotate(2deg);
          }
          72% {
            transform: translate3d(10px, -2px, 0) rotate(4deg);
          }
        }

        @keyframes cosmicDistantDrift {
          0%, 100% {
            transform: translate3d(-4px, -3px, 0) scale(0.96);
          }
          50% {
            transform: translate3d(7px, 8px, 0) scale(1.03);
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

          .cosmic-planet-ringed {
            top: 10%;
            right: -8%;
            width: 92px;
          }

          .cosmic-planet-blue {
            left: -6%;
            bottom: 13%;
            width: 68px;
          }

          .cosmic-planet-distant {
            left: 14%;
            top: 18%;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .cosmic-nebula,
          .cosmic-star,
          .cosmic-planet {
            animation: none;
          }
        }
      `}</style>
    </>
  );
};

export default SakuraFalling;
