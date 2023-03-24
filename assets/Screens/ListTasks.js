import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity, TextInput } from 'react-native';

// Icons
import { Feather, Ionicons, AntDesign } from '@expo/vector-icons';

// redux
import { connect } from 'react-redux';

// styles
import styles from '../Styles/listScreenStyle/style';
import nightStyle from '../Styles/listScreenStyle/nightStyle';
import darkTheme from '../Styles/darkTheme';

// db
import { getTodos, deleteTodo } from '../db/crud';

const TasksPage = ({ route, nightMode, navigation }) => {
    const [initialTasks, setInitialTasks] = useState([]);

    const [tasks, setTasks] = useState(initialTasks);
    const [searchText, setSearchText] = useState('');
    const [refresh, setRefresh] = useState(false); // <-- add refresh state


    const fetchData = () => {
        getTodos(todos => {
            setInitialTasks(todos);
            setRefresh(!refresh); // <-- update refresh state
        });

        if (route.params?.value === 'Completed') {
            setTasks(initialTasks.filter((task) => task.completed === true));
        } else if (route.params?.value === 'Pending') {
            setTasks(initialTasks.filter((task) => task.completed === false));
        } else if (route.params?.value === 'Favourite') {
            setTasks(initialTasks.filter((task) => task.favorite === true));
        } else if (route.params?.value === 'Due-Today') {
            const now = new Date();
            const year = now.getFullYear();
            const month = now.getMonth() + 1;
            const day = now.getDate();
            const today = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
            setTasks(initialTasks.filter((task) => {
                const dueDate = task.dueDate;
                return (dueDate === today);
            }));
        } else {
            setTasks(initialTasks);
        }
    }

    useEffect(() => {
        fetchData();
    }, [route.params?.value, refresh]);

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

    const handleDelete = (id) => {
        deleteTodo(id);
        setRefresh(!refresh); // <-- update refresh state
    };

    return (
        <View style={nightMode ? nightStyle.container : styles.container}>
            <Text style={[nightMode ? nightStyle.title : styles.title, { color: 'white', fontSize: 30, marginBottom: '6%' }]}>{route.params?.value} Tasks</Text>
            <View style={nightMode ? nightStyle.header : styles.header}>
                <View style={nightMode ? nightStyle.searchBar : styles.searchBar}>
                    <TextInput
                        placeholder="Search"
                        style={nightMode ? nightStyle.searchInput : styles.searchInput}
                        placeholderTextColor={nightMode ? darkTheme.colors.text : "gray"}
                        color={nightMode ? darkTheme.colors.text : "black"}
                        value={searchText}
                        onChangeText={handleSearch}
                    />
                    <Text style={nightMode ? nightStyle.searchButton : styles.searchButton}>
                        <Feather name="search" size={24} color={nightMode ? darkTheme.colors.text : "#3466AA"} />
                    </Text>
                </View>
            </View>
            <ScrollView style={nightMode ? nightStyle.scrollView : styles.scrollView}>
                {tasks.map((task) => (
                    <TouchableOpacity
                        key={task.id} style={nightMode ? nightStyle.taskMain : styles.taskMain}
                        onPress={()=> navigation.navigate('Add', { item:task }) }
                    >
                        <TouchableOpacity onPress={() => toggleTask(task.id)} style={nightMode ? nightStyle.toggleButton : styles.toggleButton}>
                            {task.completed ? (
                                <Ionicons name="checkmark-circle-outline" size={24} color={nightMode ? darkTheme.colors.text : "#3466AA"} />
                            ) : (
                                <Ionicons name="radio-button-off-outline" size={24} color={nightMode ? darkTheme.colors.text : "#3466AA"} />
                            )}
                        </TouchableOpacity>
                        <View key={task.id} style={nightMode ? nightStyle.task : styles.task}>
                            <View style={styles.row}>
                                <Text style={nightMode ? nightStyle.title : styles.title}>{task.title}</Text>
                                <TouchableOpacity onPress={() => toggleFavorite(task.id)} style={nightMode ? nightStyle.favoriteButton : styles.favoriteButton}>
                                    {task.favorite ? (
                                        <Ionicons name="star" size={24} color={nightMode ? darkTheme.colors.text : "#3466AA"} />
                                    ) : (
                                        <Ionicons name="star-outline" size={24} color={nightMode ? darkTheme.colors.text : "#3466AA"} />
                                    )}
                                </TouchableOpacity>
                            </View>
                            <View style={styles.row}>
                                <Text style={nightMode ? nightStyle.dueDate : styles.dueDate}>Due Date: {task.dueDate ? task.dueDate : "None"}</Text>
                                <TouchableOpacity style={styles.favoriteButton} onPress={()=>handleDelete(task.id)}>
                                    <AntDesign name="delete" size={24} color={nightMode ? darkTheme.colors.text : "#3466AA"} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </TouchableOpacity>

                ))}
            </ScrollView>
        </View>
    );
};

const mapStateToProps = state => ({
    nightMode: state.nightMode,
});

export default connect(mapStateToProps)(TasksPage);