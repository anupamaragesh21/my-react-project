import React, { useState } from 'react';
import AddTask from './Form';

// Define the type for the task object
interface Task {
  Id: number;
  Title: string;
  Status: string;
  Priority:string
}

const ManageTask: React.FC = () => {
  // Sample task data with the correct type
  const [tasks, setTasks] = useState<Task[]>([
    { Id: 1, Title: 'Test Task 01', Status: 'Pending',Priority:'Low' },
    { Id: 2, Title: 'Test Task 02', Status: 'Pending',Priority:'Low' },
    { Id: 3, Title: 'Test Task 03', Status: 'Pending',Priority:'Low' }   

  ]);

  const deleteTask = (id: number) => {
    setTasks(tasks.filter(task => task.Id !== id));
  };

  const MarkasCompleted = (id: number) => {
    setTasks(tasks.map(task =>
      task.Id === id ? { ...task, Status: "Completed" } : task
    ));
  };

  const addTask = (title: string, status: string, priority: string) => {
    const newTask: Task = {
      Id: tasks.length + 1,
      Title:title,
      Status: status,
      Priority:priority
    };

    setTasks([...tasks, newTask]);
    setShowAddTaskForm(false);
    setShowAddButton(true);
    //alert('New task added.');
  };

    // State 
    const [searchQuery, setSearchQuery] = useState('');
    const [filter, setFilter] = useState('All');
    const [showAddTaskForm, setShowAddTaskForm] = useState(false);
    const [showAddButton, setShowAddButton] = useState(true);

    
    // Filter tasks based on search query and dropdown filter
    const filteredTasks = tasks.filter(task => {
      const matchesSearch = task.Title.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesFilter = 
        filter === 'All' ||
        (filter === 'Completed' && task.Status==='Completed') ||
        (filter === 'Pending'&& task.Status ==='Pending');
      return matchesSearch && matchesFilter;
    });

  return (
    <div>
      <h2>Task Management</h2>
      
 
{
    showAddButton&&  <button
        onClick={() => {setShowAddTaskForm(true) ;setShowAddButton(false);}}
        style={{
          padding: '10px 15px',
          backgroundColor: 'black',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        Add Task
      </button>
}

      
      {showAddTaskForm && <AddTask addTask={addTask} />}
     
      <ul>
        {filteredTasks.map((task) => (
          <li key={task.Id}  style={{ margin: '10px 0', padding: '10px', border: '1px solid #ddd', borderRadius: '5px' }}>
            <span style={{ margin: '10px 0', padding: '10px' }}>
              {task.Title}
            </span>
            <span style={{ margin: '10px 0', padding: '10px' }}>
              {task.Status}
            </span>
            <span style={{ margin: '10px 0', padding: '10px' }}>
              {task.Priority}
            </span>
           {task.Status ==='Pending' && <button
              onClick={() => MarkasCompleted(task.Id)}
              style={{
                border: 'none',
                borderRadius: '5px',
                padding: '5px 10px',
                marginRight: '10px',
                cursor: 'pointer',
              }}
            >
             'Mark as Completed'
            </button>
}
            <button
              onClick={() => deleteTask(task.Id)}
              style={{
                border: 'none',
                borderRadius: '5px',
                padding: '5px 10px',
                cursor: 'pointer',
              }}
            >
              Delete
            </button>
          </li>
          
        ))}
      </ul>
    </div>
  );
};

export default ManageTask;