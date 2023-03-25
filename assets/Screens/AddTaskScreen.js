import { Text, View, TouchableOpacity, TextInput, KeyboardAvoidingView } from 'react-native';
import { useState, useEffect } from 'react';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { format } from 'date-fns';
import { connect } from 'react-redux';

// icons
import { Fontisto, Ionicons, FontAwesome, AntDesign } from '@expo/vector-icons';

// styles
import styles from '../Styles/addTaskScreenStyle/style';
import nightStyle from '../Styles/addTaskScreenStyle/nightStyle';
import darkTheme from '../Styles/darkTheme';

// db
import { addTodo, updateTodo, deleteTodo } from '../db/crud';

const AddTaskScreen = ({ navigation, nightMode, route }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState();
    const [isDatePickerVisible, setDatePickerVisible] = useState(false);
    const [isFavourite, setIsFavourite] = useState(false);
    const [notifications, setNotifications] = useState(false);
    const [showDueDateAlert, setShowDueDateAlert] = useState(false);
    const [completed, setCompleted] = useState(false);

    useEffect(() => {
        if (route.params) {
            const { item } = route.params;
            setTitle(item.title || '');
            setDescription(item.description || '');
            setDate(item.due_date || '');
            setIsFavourite(item.favourite === 1);
            setNotifications(item.completed === 1);
            setShowDueDateAlert(item.due_date_alert === 1);
            setCompleted(item.completed === 1);
        } else {
            setTitle('');
            setDescription('');
            setDate();
            setIsFavourite(false);
            setNotifications(false);
            setShowDueDateAlert(false);
        }
    }, [route.params]);

    const handleDateConfirm = date => {
        // Get today's date
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        date.setHours(0, 0, 0, 0);

        // If the selected date is before today, show an error message and return
        if (date < today) {
            alert("Please select a date that is not in the past.");
            setDatePickerVisible(false);
            setNotifications(false);
            setShowDueDateAlert(false);
            setDate();
        } else {
            setDate(date);
            setNotifications(true);
            setDatePickerVisible(false);
            setShowDueDateAlert(true);
        }
    };


    const handleTitleChange = (text) => {
        setTitle(text);
    };

    const handleDescriptionChange = (text) => {
        setDescription(text);
    };

    const handleFavourite = () => {
        setIsFavourite(!isFavourite);
    }

    const handleNotifications = () => {
        setNotifications(!notifications);
    }

    const handleSubmit = () => {
        if (!title.trim()) {
            console.log("Empty Title!");
            return;
        }

        if (route.params && route.params.item) {
            updateTodo(route.params.item.id, title, description, date, showDueDateAlert, isFavourite ? 1 : 0, completed ? 1 : 0);
            route.params = undefined;
        } else {
            addTodo(title, description, date, showDueDateAlert, isFavourite ? 1 : 0, false);
        }
        setTitle('');
        setDescription('');
        setDate();
        setIsFavourite(false);
        setNotifications(false);
        setShowDueDateAlert(false);
        navigation.navigate('List');

    };

    const handleClear = () => {
        setTitle();
        setDescription();
        setDate();
        setIsFavourite(false);
        setNotifications(false);
        setShowDueDateAlert(false);
        if (route.params) {
            deleteTodo(route.params.item.id);
            route.params = undefined;
            navigation.navigate('List');
        }
    }

    return (
        <KeyboardAvoidingView
            style={nightMode ? nightStyle.container : styles.container}
            behavior="height"
        >

            <View style={styles.four}>
                <Text style={styles.title}>{(route.params ? "Update Task" : "Add Task")}</Text>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity
                        onPress={handleClear}
                    >
                        {
                            (route.params ?
                                <AntDesign name="delete" size={35} color={nightMode ? darkTheme.colors.accentColor : darkTheme.colors.text} />
                                :
                                <Ionicons name="refresh-circle-outline" size={35} color={nightMode ? darkTheme.colors.accentColor : darkTheme.colors.text} />
                            )
                        }
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={handleSubmit}
                    >
                        <AntDesign name={(route.params ? "checksquareo" : "plussquareo")} size={35} color={nightMode ? darkTheme.colors.accentColor : darkTheme.colors.text} />
                    </TouchableOpacity>
                </View>
            </View>
            <TextInput
                style={nightMode ? nightStyle.one : styles.one}
                placeholder="Enter a title"
                value={title}
                onChangeText={handleTitleChange}
                placeholderTextColor={nightMode ? darkTheme.colors.text : "#3466AA"}
                color={nightMode ? darkTheme.colors.text : "#3466AA"}
            />
            <TextInput
                style={nightMode ? nightStyle.two : styles.two}
                multiline
                numberOfLines={23}
                placeholder="Enter a description"
                value={description}
                onChangeText={handleDescriptionChange}
                placeholderTextColor={nightMode ? darkTheme.colors.text : "#3466AA"}
                color={nightMode ? darkTheme.colors.text : "#3466AA"}
            />
            <View style={nightMode ? nightStyle.three : styles.three}>
                <View style={nightMode ? nightStyle.three_1 : styles.three_1}>
                    <TouchableOpacity
                        style={[nightMode ? nightStyle.three_1_1 : styles.three_1_1, { opacity: notifications ? 1 : 0.8 }]}
                        activeOpacity={1}
                        onPress={handleNotifications}
                        disabled={!showDueDateAlert}
                    >
                        <Text style={nightMode ? nightStyle.sliderText : styles.sliderText}>Due Date Alert</Text>
                        <Ionicons name={notifications ? 'notifications-outline' : 'notifications-off-outline'} size={30} color={nightMode ? darkTheme.colors.text : "#3466AA"} />
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[nightMode ? nightStyle.three_1_1 : styles.three_1_1, { opacity: isFavourite ? 1 : 0.8 }]}
                        activeOpacity={1}
                        onPress={handleFavourite}
                    >
                        <Text style={nightMode ? nightStyle.sliderText : styles.sliderText}>Add to Favourite</Text>
                        <FontAwesome name={isFavourite ? 'star' : 'star-o'} size={30} color={nightMode ? darkTheme.colors.text : "#3466AA"} />
                    </TouchableOpacity>

                </View>
                <TouchableOpacity
                    style={[nightMode ? nightStyle.three_2 : styles.three_2, { opacity: showDueDateAlert ? 1 : 0.8 }]}
                    onPress={() => setDatePickerVisible(true)}
                >

                    <Fontisto name="date" size={50} color={nightMode ? darkTheme.colors.text : "#3466AA"} />
                    <View style={nightMode ? nightStyle.dateContainer : styles.dateContainer}>
                        <Text style={nightMode ? nightStyle.label : styles.label}>Due date:</Text>
                        <Text style={nightMode ? nightStyle.date : styles.date}>
                            {date ? format(date, 'MMM dd, yyyy') : 'None'}
                        </Text>
                    </View>
                    <DateTimePickerModal
                        isVisible={isDatePickerVisible}
                        mode="date"
                        onConfirm={handleDateConfirm}
                        onCancel={() => setDatePickerVisible(false)}
                    />

                </TouchableOpacity>

            </View>
        </KeyboardAvoidingView>

    )
};

const mapStateToProps = state => ({
    nightMode: state.nightMode
});

export default connect(mapStateToProps)(AddTaskScreen);