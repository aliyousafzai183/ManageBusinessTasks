import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, TextInput } from 'react-native';

// Icons
import { Feather, Ionicons } from '@expo/vector-icons';

const TasksPage = ({ route }) => {
    const [initialTasks, setInitialTasks] = useState([
        { id: 1, title: 'Redux in react-native', dueDate: '2023-03-31', completed: false, favorite: false },
        { id: 2, title: 'Ali Said', dueDate: '2023-04-15', completed: false, favorite: false },
        { id: 3, title: 'Gobi Bindi', dueDate: '2023-05-01', completed: true, favorite: false },
        { id: 4, title: 'Quiz 7', dueDate: '2023-03-15', completed: false, favorite: true },
    ]);

    const [tasks, setTasks] = useState(initialTasks);
    const [searchText, setSearchText] = useState('');

    useEffect(() => {
        if (route.params?.value === 'Completed') {
            setTasks(initialTasks.filter((task) => task.completed === true));
        } else if (route.params?.value === 'Pending') {
            setTasks(initialTasks.filter((task) => task.completed === false));
        } else if (route.params?.value === 'Favourite') {
            setTasks(initialTasks.filter((task) => task.favorite === true));
        } else if (route.params?.value === 'Due-Today') {
            const now = new Date();
            const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
            setTasks(initialTasks.filter((task) => {
                const dueDate = new Date(task.dueDate);
                console.log(today.getFullYear()+'-'+today.getMonth()+'-'+today.getDate());
                return (dueDate.getTime() === today.getTime());
            }));
        } else {
            setTasks(initialTasks);
        }
    }, [route.params?.value]);

    const toggleTask = (taskId) => {
        setTasks(
            tasks.map((task) =>
                task.id === taskId ? { ...task, completed: !task.completed } : task
            )
        );
    };

    const toggleFavorite = (taskId) => {
        setTasks(
            tasks.map((task) =>
                task.id === taskId ? { ...task, favorite: !task.favorite } : task
            )
        );
    };

    const handleSearch = (text) => {
        setSearchText(text);

        if (text === '') {
            setTasks(initialTasks);
            return;
        }

        const filteredTasks = initialTasks.filter((task) =>
            task.title.toLowerCase().includes(text.toLowerCase())
        );
        setTasks(filteredTasks);
    };

    return (
        <View style={styles.container}>
            <Text style={[styles.title, { color: 'white', fontSize:30, marginBottom:'6%' }]}>{route.params?.value} Tasks</Text>
            <View style={styles.header}>
                <View style={styles.searchBar}>
                    <TextInput
                        placeholder="Search"
                        style={styles.searchInput}
                        value={searchText}
                        onChangeText={handleSearch}
                    />
                    <Text style={styles.searchButton}>
                        <Feather name="search" size={24} color="#3466AA" />
                    </Text>
                </View>
            </View>
            <ScrollView style={styles.scrollView}>
                {tasks.map((task) => (
                    <TouchableOpacity key={task.id} style={styles.taskMain}>
                        <TouchableOpacity onPress={() => toggleTask(task.id)} style={styles.toggleButton}>
                            {task.completed ? (
                                <Ionicons name="checkmark-circle-outline" size={24} color="#3466AA" />
                            ) : (
                                <Ionicons name="radio-button-off-outline" size={24} color="#3466AA" />
                            )}
                        </TouchableOpacity>
                        <View key={task.id} style={styles.task}>
                            <View style={styles.row}>
                                <Text style={styles.title}>{task.title}</Text>
                                <TouchableOpacity onPress={() => toggleFavorite(task.id)} style={styles.favoriteButton}>
                                    {task.favorite ? (
                                        <Ionicons name="star" size={24} color="#3466AA" />
                                    ) : (
                                        <Ionicons name="star-outline" size={24} color="gray" />
                                    )}
                                </TouchableOpacity>
                            </View>
                            <Text style={styles.dueDate}>Due Date: {task.dueDate}</Text>
                        </View>
                    </TouchableOpacity>

                ))}
            </ScrollView>
        </View>
    );
};

export default TasksPage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3466AA',
        paddingLeft: '3%',
        paddingRight: '3%',
        paddingTop: '5%'
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '5%'
    },
    scrollView: {
        flex: 1,
    },
    taskMain: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomColor: 'lightgray',
        backgroundColor: '#EAEFF6',
        borderBottomWidth: 1,
        borderRadius: 20,
        padding: 10,
        marginTop: '3%'
    },

    toggleButton: {
        marginRight: '3%'
    },

    task: {
        flexDirection: 'column',
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    title: {
        width: '80%',
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: 5,
    },
    favoriteButton: {
        width: '20%',
    },
    dueDate: {
        fontSize: 16,
        marginVertical: 5,
    },

    searchBar: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 13,
        paddingHorizontal: 10,
    },

    searchInput: {
        flex: 1,
        padding: 5,
    },

    searchButton: {
        borderRadius: 5,
        padding: 5,
        marginLeft: 5,
    },
    filterButton: {
        borderRadius: 5,
        padding: 5,
        marginLeft: 5,
    },
})