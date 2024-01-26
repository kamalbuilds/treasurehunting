// @ts-nocheck
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

export default function GameplayAnimation({ weapon } : any) {

  const [gemPositions, setGemPositions] = useState([]);

  useEffect(() => {
    // Initialize gems only once when the component mounts
    const initialGemPositions = Array.from({ length: 12 }, () => ({
      x: Math.random() * (window.innerWidth - 48),
      y: -48,
    }));
    setGemPositions(initialGemPositions);
  }, []);

  useEffect(() => {
    // Separate effect for moving gems to avoid dependency cycle
    const moveGems = () => {
      const screenWidth = window.innerWidth;
      const screenHeight = window.innerHeight;
      const newPositions = gemPositions.map((gem) => {
        let newX = gem.x - 5;
        if (newX < -48) {
          // Reset gem position to the right of the screen
          newX = screenWidth;
          const newY = Math.random() * screenHeight;
          return { ...gem, x: newX, y: newY };
        }
        return { ...gem, x: newX };
      });
      setGemPositions(newPositions);
    };

    const interval = setInterval(moveGems, 100); // Move gems every 100ms
    return () => clearInterval(interval);
  }, [gemPositions]); // Dependency to re-run the effect when gemPositions changes

  if (!weapon) {
    return <div style={{ marginLeft: 8 }}>I need a weapon!</div>;
  }

  return (
    <div className="flex justify-center gap-4">
      {gemPositions.map((gem, index) => (
        <div
          key={index}
          style={{
            position: 'absolute',
            left: `${gem.x}px`,
            top: `${gem.y}px`,
            transition: 'top 0.1s linear',
          }}
        >
          <Image src="/gold-gem.png" height="48" width="48" alt="gold-gem" />
        </div>
      ))}
    </div>
  );
}
