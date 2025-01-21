import React, { useState } from 'react';

interface AddTaskFormProps {
  addTask: (title: string, status: string, priority: string,desc:string) => void;
}

const AddTask: React.FC<AddTaskFormProps> = ({ addTask }) => {
  const [title, setNewTaskTitle] = useState('');
  const [status, setStatus] = useState<string>('Pending'); 
  const [priority, setPriority] = useState<string>('Low');
  const [newTaskDesc, setNewTaskDesc] = useState('');
  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim()) {
      addTask(title, status, priority,newTaskDesc);
      setNewTaskTitle('');
      setStatus("Pending");
      setPriority('Low');
      setNewTaskDesc('');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
      <input
        type="text"
        value={title}
        onChange={(e) => setNewTaskTitle(e.target.value)}
        style={{
          padding: '10px',
          width: '300px',
          marginRight: '10px',
          borderRadius: '5px',
          border: '1px solid #ccc',
        }}
      />

      <select
        value={status}
        onChange={(e) => setStatus(e.target.value )}
        style={{
          padding: '10px',
          marginRight: '10px',
          borderRadius: '5px',
          border: '1px solid #ccc',
        }}
      >
        <option value="Pending">Pending</option>
        <option value="Completed">Completed</option>
      </select>

      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
        style={{
          padding: '10px',
          marginRight: '10px',
          borderRadius: '5px',
          border: '1px solid #ccc',
        }}
      >
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>

      <button
        type="submit"
        style={{
          padding: '10px 15px',
          backgroundColor: 'Black',
          color: 'white',
          border: 'none',
        }}
      >
        Save
      </button>
    </form>
  );
};

export default AddTask;