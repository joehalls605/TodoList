import React, { useContext, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { TaskContext } from '../context/TaskContext';

const HomeScreen = ({ navigation }) => {
    const { tasks } = useContext(TaskContext);
    const [filter, setFilter] = useState("All");

    const filteredTasks = filter === 'All' ? tasks : tasks.filter(t => t.category === filter);

    return (
        <View style={styles.container}>
            {/* Filter Buttons */}
            <View style={styles.filterContainer}>
                {['All', 'Work', 'Personal'].map(category => (
                    <TouchableOpacity
                        key={category}
                        onPress={() => setFilter(category)}
                        style={[
                            styles.filterButton,
                            filter === category && styles.activeFilter
                        ]}
                    >
                        <Text style={[
                            styles.filterText,
                            filter === category && styles.activeFilterText
                        ]}>
                            {category}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>

            {/* Add Task Button */}
            <TouchableOpacity
                style={styles.addButton}
                onPress={() => navigation.navigate("AddTask")}
            >
                <Text style={styles.addButtonText}>+ Add Task</Text>
            </TouchableOpacity>

            {/* Task List */}
            <FlatList
                data={filteredTasks}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={styles.taskItem}
                        onPress={() => navigation.navigate("TaskDetail", { taskId: item.id })}
                    >
                        <Text style={styles.taskTitle}>{item.title}</Text>
                        <Text style={styles.taskCategory}>{item.category}</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#fff',
    },
    filterContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 16,
    },
    filterButton: {
        paddingVertical: 8,
        paddingHorizontal: 16,
        backgroundColor: '#eee',
        borderRadius: 20,
    },
    activeFilter: {
        backgroundColor: '#4CAF50',
    },
    filterText: {
        color: '#333',
        fontWeight: 'bold',
    },
    activeFilterText: {
        color: '#fff',
    },
    addButton: {
        backgroundColor: '#2196F3',
        paddingVertical: 12,
        borderRadius: 8,
        alignItems: 'center',
        marginBottom: 20,
    },
    addButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    taskItem: {
        padding: 16,
        backgroundColor: '#f9f9f9',
        borderRadius: 8,
        marginBottom: 12,
        borderWidth: 1,
        borderColor: '#ddd',
    },
    taskTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 4,
    },
    taskCategory: {
        fontSize: 14,
        color: '#666',
    },
});
