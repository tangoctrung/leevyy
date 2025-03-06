'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const SakuraFalling = () => {
  const [petals, setPetals] = useState<any[]>([]);

  useEffect(() => {
    const newPetals: any[] = Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 5,
      duration: Math.random() * 5 + 5,
      size: Math.random() * 20 + 10,
    }));
    setPetals(newPetals);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
      {petals.map((petal) => (
        <motion.div
          key={petal.id}
          className="absolute"
          style={{ left: `${petal.left}%`, width: petal.size, height: petal.size, opacity: 0.8 }}
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: '100vh', opacity: 1 }}
          transition={{ duration: petal.duration, delay: petal.delay, repeat: Infinity }}
        >
          🌸
        </motion.div>
      ))}
    </div>
  );
};

export default SakuraFalling