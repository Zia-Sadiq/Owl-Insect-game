import React, { useEffect, useState, useRef } from 'react';
import owl from '../assets/images/owl.png';
import eye from '../assets/images/eye.png';

const Owl = ({ targetPosition }) => {
  const owlRef = useRef(null);
  const [leftEyePosition, setLeftEyePosition] = useState({ x: 0, y: 0 });
  const [rightEyePosition, setRightEyePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (!targetPosition) return;

    const updateEyePosition = () => {
      if (!owlRef.current) return;

      const owlRect = owlRef.current.getBoundingClientRect();

      const calculateEyePosition = (eyeCenter) => {
        const angle = Math.atan2(targetPosition.y - eyeCenter.y, targetPosition.x - eyeCenter.x);
        const radius = 10; // The radius within which the eye can move
        return {
          x: radius * Math.cos(angle),
          y: radius * Math.sin(angle),
        };
      };

      const leftEyeCenter = {
        x: owlRect.left + 35, // Adjusted to fit the left eye
        y: owlRect.top + 60, // Adjusted to fit the left eye
      };

      const rightEyeCenter = {
        x: owlRect.left + 70, // Adjusted to fit the right eye
        y: owlRect.top + 60, // Adjusted to fit the right eye
      };

      setLeftEyePosition(calculateEyePosition(leftEyeCenter));
      setRightEyePosition(calculateEyePosition(rightEyeCenter));
    };

    updateEyePosition();
  }, [targetPosition]);

  return (
    <div ref={owlRef} className="owl-container">
      <img src={owl} alt="Owl" className="owl-img" />
      <div className="eye-container">
        <img
          src={eye}
          alt="Eye"
          className="eye-img left-eye"
          style={{ transform: `translate(${leftEyePosition.x}px, ${leftEyePosition.y}px)` }}
        />
        <img
          src={eye}
          alt="Eye"
          className="eye-img right-eye"
          style={{ transform: `translate(${rightEyePosition.x}px, ${rightEyePosition.y}px)` }}
        />
      </div>
    </div>
  );
};

export default Owl;
