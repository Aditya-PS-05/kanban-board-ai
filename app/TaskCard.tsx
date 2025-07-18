
import { useState, useEffect, useRef } from "react";

export default function TaskCard({ task }) {
  const [isDragging, setDragging] = useState(false);
  const dragRef = useRef(null);

  const handleDragStart = (event) => {
    setDragging(true);
  };

  const handleDragEnd = (event) => {
    setDragging(false);
  };

  useEffect(() => {
    if (dragRef.current) {
      dragRef.current.addEventListener('dragstart', handleDragStart);
      dragRef.current.addEventListener('dragend', handleDragEnd);
    }

    return () => {
      if (dragRef.current) {
        dragRef.current.removeEventListener('dragstart', handleDragStart);
        dragRef.current.removeEventListener('dragend', handleDragEnd);
      }
    };
  }, []);

  return (
    <div
      draggable
      ref={dragRef}
      className={
        'p-2 mt-2 text-center bg-white border-2 rounded shadow ' +
        (isDragging ? 'border-green-400 bg-green-100' : 'border-gray-200')
      }
    >
      {task.text}
    </div>
  );
}
