import React from 'react';
import { useDragAndDrop } from '../hooks/useDragAndDrop';

const Insect = ({ type, src, onDrag, onDrop }) => {
  const { position, isDragging, elementRef, handleMouseDown } = useDragAndDrop((pos) => {
    onDrop(pos);
    onDrag(pos);
  });

  return (
    <img
      src={src}
      alt={type}
      ref={elementRef}
      onMouseDown={handleMouseDown}
      onMouseMove={(e) => isDragging && onDrag({ x: e.clientX, y: e.clientY })}
      style={{
        position: 'absolute',
        left: position.x,
        top: position.y,
        cursor: isDragging ? 'grabbing' : 'grab',
        transition: isDragging ? 'none' : 'transform 0.2s',
      }}
      className="insect-img"
    />
  );
};

export default Insect;
