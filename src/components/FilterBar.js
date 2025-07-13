import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const FilterBar = ({currentFilter, onFilterChange, filters = ['All', 'Work', 'Personal']}) => {
    {/* Filter Buttons */}
    return(
        <View>
            {filters.map(category => (
                <TouchableOpacity
                    key={category}
                    onPress={() => onFilterChange(category)}
                    style={[
                        styles.button,
                        currentFilter === category && styles.activeButton
                    ]}
                >
                    <Text style={[
                        styles.filterText,
                        currentFilter === category && styles.activeFilterText
                    ]}>
                        {category}
                    </Text>
                </TouchableOpacity>
            ))}
        </View>
        )
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 16,
    },
    button: {
        paddingVertical: 8,
        paddingHorizontal: 16,
        backgroundColor: '#eee',
        borderRadius: 20,
    },
    activeButton: {
        backgroundColor: '#4CAF50',
    },
    buttonText: {
        color: '#333',
        fontWeight: 'bold',
    },
    activeText: {
        color: '#fff',
    },
});


export default FilterBar;