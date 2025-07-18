
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { nanoid } from "@reduxjs/toolkit";
import Column from "./Column";

export default function KanbanBoard() {
  const [columns, setColumns] = useState([
    { id: nanoid(), title: 'To Do', cards: [] },
    { id: nanoid(), title: 'In Progress', cards: [] },
    { id: nanoid(), title: 'Completed', cards: [] },
  ]);

  const addTask = (columnId) => {
    const newTaskText = prompt('Enter the text for the new task:');
    
    if (newTaskText === null) {
      return;
    }

    const newTask = { id: nanoid(), text: newTaskText };

    const newColumns = columns.map((column) => {
      if (column.id === columnId) {
        return { ...column, tasks: [...column.tasks, newTask] };
      }
      return column;
    });

    setColumns(newColumns);
  }

  return (
    <div className='flex items-start justify-between p-4'>
      {columns.map((column) => (
        <div className='flex flex-col mx-2' key={column.id}>
          <h2 className='text-xl font-bold text-gray-700'>{column.title}</h2>
          <Column column={column} />
          <button 
            onClick={() => addTask(column.id)} 
            className='mt-2 px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:bg-blue-700'
          >
            Add Task
          </button>
        </div>
      ))}
    </div>
  );
}
