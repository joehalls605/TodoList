import { useState } from 'react';

const useTasks = () => {
    const [tasks, setTasks] = useState([]);

    // Add a new task
    // Takes previous list of tasks, spreads them and adds a new one to the end
    const addTask = (task) => {
        setTasks((prevTasks) => [...prevTasks, task])
    };

    // Update an existing task
    // Takes previous list of tasks, loops through them, if ID matches, it merges the task with updates using object spread
    // Otherwise, it returns task as is.
    const updateTask = (taskId, updates) => {
        setTasks((prevTasks) =>
            prevTasks.map((task) =>
                task.id === taskId ? {...task, ...updates} : task
            )
        )
    };

    // Delete a task
    const deleteTask = (taskId) => {
        // Takes previous task list, returns only the tasks that do the not match the ID
        setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
    };

    return{
        tasks,
        addTask,
        updateTask,
        deleteTask,
    }
}

export default useTasks;

