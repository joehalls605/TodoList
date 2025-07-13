import React, {useContext, useState} from 'react';
import {View, Text, FlatList, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import {TaskContext} from '../context/TaskContext'

const HomeScreen = ( {navigation} ) => {
    const { tasks } = useContext(TaskContext);

    // Keys track of which filter selected - All, Work, Personal
    const [filter, setFilter] = useState("All");

    // If filter is all, use full list of tasks, otherwise filter tasks by category
    const filteredTasks = filter === 'All' ? tasks : tasks.filter(t => t.category === filter);

    return(
        <View style={{flex: 1, padding: 16}}>
            {/* Filter Buttons*/}
            {/* Filter Buttons
            Hardcoded array of filter names
            */
            }
            {['All', 'Work', 'Personal'].map(category => (
                <TouchableOpacity
                    key={category}
                    onPress={() => setFilter(category)}>
                    <Text>{category}</Text>
                </TouchableOpacity>
            ))}

            {/* Task List*/}
            <FlatList
                data={filteredTasks}
                keyExtractor={item => item.id}
                renderItem={({item}) => (
                    <TouchableOpacity onPress={() => navigation.navigate("TaskDetail", {taskId: item.id})}>
                        <Text>{item.title}</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}

export default HomeScreen;