import React, { useContext, useState } from 'react';
import {View, Text, TextInput, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import { TaskContext } from '../context/TaskContext';

const AddTaskScreen = ({ navigation }) => {
    const { addTask } = useContext(TaskContext);
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");

    const handleAdd = () => {
        if(title.trim() === "") return;

        const newTask = {
            id: Date.now().toString(),
            title,
            category,
            done: false
        };
        addTask(newTask);
        navigation.goBack();
    }

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Task Title:</Text>
            <TextInput style={styles.input} value={title} onChangeText={setTitle}/>

            <Text style={styles.label}>Task Category:</Text>
            <TextInput style={styles.input} value={category} onChangeText={setCategory}/>

            <TouchableOpacity style={styles.button} onPress={handleAdd}>
                <Text style={styles.buttonText}>Add Task</Text>
            </TouchableOpacity>
        </View>
    );
};

export default AddTaskScreen;

const styles = StyleSheet.create({
    container: { padding: 20 },
    label: { marginTop: 10 },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        marginTop: 5,
        borderRadius: 5,
    },
    button: {
        marginTop: 20,
        backgroundColor: '#007bff',
        padding: 15,
        borderRadius: 5,
        alignItems: 'center'
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold'
    }
});