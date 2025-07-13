import React, { createContext, useState} from 'react';
import useTasks from '../hooks/useTasks';


// Creates the Context object that holds the task data
export const TaskContext = createContext();

// This is the context provider component that is wrapped around the app to provide tasks state and related functions to nested components
export const TaskProvider = ({children}) => {
    const taskData = useTasks();

    return (
        <TaskContext.Provider value={taskData}>
            {children}
        </TaskContext.Provider>
    )
};
// Children are the nested components that would be wrapped within the task provider