import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { TaskContext } from '../context/TaskContext';

const TaskDetailsScreen = ( {route, navigation} ) => {
    const { taskId } = route.params;
    const { tasks, updateTask, deleteTask } = useContext(TaskContext);

    const task = tasks.find(t => t.id === taskId);
    if(!task){
        return(
            <View>
                <Text>Task not found</Text>
            </View>
        )
    }

    const handleMarkDone = () => updateTask(taskId, {done: true});

    const handleDelete = () => {
        deleteTask(taskId);
        navigation.goBack();
    }

    return(
        <View style={styles.container}>
            <Text style={styles.title}>{task.title}</Text>
            <Text>Category: {task.category}</Text>
            <Text>Status: {task.done ? 'Done': 'Not Done'}</Text>

            {!task.done && (
                <TouchableOpacity style={styles.button} onPress={handleMarkDone}>
                    <Text style={styles.buttonText}>Mark as Done</Text>
                </TouchableOpacity>
            )}

            <TouchableOpacity style={[styles.button, { backgroundColor: 'crimson' }]} onPress={handleDelete}>
                <Text style={styles.buttonText}>Delete Task</Text>
            </TouchableOpacity>

        </View>
    )

}

export default TaskDetailsScreen;

const styles = StyleSheet.create({
    container: { padding: 20 },
    title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
    button: {
        marginTop: 15,
        backgroundColor: 'green',
        padding: 12,
        borderRadius: 6,
        alignItems: 'center'
    },
    buttonText: { color: 'white', fontWeight: 'bold' }
});