
import TaskCard from "./TaskCard";
import { useState, useEffect, useRef } from "react";

export default function Column({ column }) {
  const dropRef = useRef(null);

  const handleDragOver = (event) => {
    event.preventDefault();

    const afterElement = getDragAfterElement(event.clientY);

  };

  const getDragAfterElement = (y) => {
    const taskElements = [...dropRef.current.childNodes];
    return taskElements.reduce((closest, child) => {
      const box = child.getBoundingClientRect();
      const offset = y - box.top - box.height / 2;
      if (offset < 0 && offset > closest.offset) {
        return { offset: offset, element: child };
      } else {
        return closest;
      }
    }, { offset: Number.NEGATIVE_INFINITY }).element;
  };

  useEffect(() => {
    if (dropRef.current) {
      dropRef.current.addEventListener('dragover', handleDragOver);
    }

    return () => {
      if (dropRef.current) {
        dropRef.current.removeEventListener('dragover', handleDragOver);
      }
    };
  }, []);

  return (
    <div ref={dropRef} className='flex flex-col w-64 px-2 py-2 bg-blue-100 rounded shadow'>
      {column.cards.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
}
