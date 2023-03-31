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
import { getTodos, deleteTodo, updateCompleted, updateFavorite } from '../db/crud';

const TasksPage = ({ route, nightMode, navigation }) => {
  const [tasks, setTasks] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [refresh, setRefresh] = useState(false);

  const fetchData = () => {
    getTodos((todos) => {
      setTasks(todos);
      setRefresh(!refresh);
    });

    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1;
    const day = now.getDate();
    const today = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;

    if (route.params?.value === 'Completed') {
      setTasks(tasks.filter((task) => task.completed == 1));
    } else if (route.params?.value === 'Pending') {
      setTasks(tasks.filter((task) => task.completed == 0));
    } else if (route.params?.value === 'Favourite') {
      setTasks(tasks.filter((task) => task.favourite == 1));
    } else if (route.params?.value === 'Due-Today') {
      setTasks(tasks.filter((task) => {
        const dueDate = task.due_date;
        return dueDate === today && task.completed == 0;
      }));
    } else if (searchText != '') {
      const filteredTasks = tasks.filter((task) =>
        task.title.toLowerCase().includes(searchText.toLowerCase())
      );
      setTasks(filteredTasks);
    }
  };

  useEffect(() => {
    fetchData();
  }, [route.params?.value, refresh]);

  const toggleTask = (taskData) => {
    updateCompleted(taskData.id, !taskData.completed);
  };

  const toggleFavorite = (taskData) => {
    updateFavorite(taskData.id, !taskData.favourite);
    setRefresh(!refresh);
  };

  const handleSearch = (text) => {
    setSearchText(text);
  };

  const handleDelete = (id) => {
    deleteTodo(id);
    setRefresh(!refresh);
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
        <ScrollView style={nightMode ? nightStyle.scrollView : styles.scrollView}>
          {[...tasks.filter(task => !task.completed), ...tasks.filter(task => task.completed)].map((task) => (
            <TouchableOpacity
              key={task.id} style={nightMode ? nightStyle.taskMain : styles.taskMain}
              onPress={() => navigation.navigate('Add', { item: task })}
            >
              <TouchableOpacity onPress={() => toggleTask(task)} style={nightMode ? nightStyle.toggleButton : styles.toggleButton}>
                {task.completed ? (
                  <Ionicons name="checkmark-circle-outline" size={30} color={nightMode ? darkTheme.colors.text : "#3466AA"} />
                ) : (
                  <Ionicons name="radio-button-off-outline" size={30} color={nightMode ? darkTheme.colors.text : "#3466AA"} />
                )}
              </TouchableOpacity>
              <View key={task.id} style={nightMode ? nightStyle.task : styles.task}>
                <View style={styles.row}>
                  <Text style={nightMode ? nightStyle.title : styles.title}>{task.title}</Text>
                  <TouchableOpacity onPress={() => toggleFavorite(task)} style={nightMode ? nightStyle.favoriteButton : styles.favoriteButton}>
                    {task.favourite ? (
                      <Ionicons name="star" size={24} color={nightMode ? darkTheme.colors.text : "#3466AA"} />
                    ) : (
                      <Ionicons name="star-outline" size={24} color={nightMode ? darkTheme.colors.text : "#3466AA"} />
                    )}
                  </TouchableOpacity>
                </View>
                <View style={styles.row}>
                  <Text style={nightMode ? nightStyle.dueDate : styles.dueDate}>Due Date: {task.due_date ? task.due_date : "None"}</Text>
                  <TouchableOpacity style={styles.favoriteButton} onPress={() => handleDelete(task.id)}>
                    <AntDesign name="delete" size={24} color={nightMode ? darkTheme.colors.text : "#3466AA"} />
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>



      </ScrollView>
    </View>
  );
};

const mapStateToProps = state => ({
  nightMode: state.nightMode
});

export default connect(mapStateToProps)(TasksPage);