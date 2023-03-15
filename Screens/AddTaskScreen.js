import { Text, View, StyleSheet, TouchableOpacity, TextInput, KeyboardAvoidingView, Switch } from 'react-native';
import { useState } from 'react';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { format } from 'date-fns';

// icons
import Fontisto from '@expo/vector-icons/Fontisto';
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import AntDesign from '@expo/vector-icons/AntDesign';


const AddTaskScreen = ({ navigation }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState();
    const [isDatePickerVisible, setDatePickerVisible] = useState(false);
    const [isFavourite, setIsFavourite] = useState(false);
    const [notifications, setNotifications] = useState(false);
    const [showDueDateAlert, setShowDueDateAlert] = useState(false);

    const handleDateConfirm = date => {
        setDatePickerVisible(false);
        setDate(date);
        setShowDueDateAlert(true);
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
        setTitle();
        setDescription();
        setDate();
        setIsFavourite(false);
        setNotifications(false);
        setShowDueDateAlert(false);
        navigation.navigate('Home');
    }

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior="height"
        >
            <TextInput
                style={styles.one}
                placeholder="Enter a title"
                value={title}
                onChangeText={handleTitleChange}
            />
            <TextInput
                style={styles.two}
                multiline
                numberOfLines={14}
                placeholder="Enter a description"
                value={description}
                onChangeText={handleDescriptionChange}
            />
            <View style={styles.three}>
                <View style={styles.three_1}>
                    <TouchableOpacity
                        style={[styles.three_1_1, { opacity: notifications ? 1 : 0.8 }]}
                        activeOpacity={1}
                        onPress={handleNotifications}
                        disabled={!showDueDateAlert}
                    >
                        <Text style={styles.sliderText}>Due Date Alert</Text>
                        <Ionicons name={notifications ? 'notifications-outline' : 'notifications-off-outline'} size={30} color="#3466AA" />
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[styles.three_1_1, { opacity: isFavourite ? 1 : 0.8 }]}
                        activeOpacity={1}
                        onPress={handleFavourite}
                    >
                        <Text style={styles.sliderText}>Add to Favourite</Text>
                        <FontAwesome name={isFavourite ? 'star' : 'star-o'} size={30} color="#3466AA" />
                    </TouchableOpacity>

                </View>
                <TouchableOpacity
                    style={[styles.three_2, { opacity: date ? 1 : 0.8 }]}
                    onPress={() => setDatePickerVisible(true)}
                >

                    <Fontisto name="date" size={50} color="#3466AA" />
                    <View style={styles.dateContainer}>
                        <Text style={styles.label}>Due date:</Text>
                        <Text style={styles.date}>
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

            <TouchableOpacity
                style={styles.four}
                onPress={handleSubmit}
            >
                <AntDesign name="plus" size={50} color="#3466AA" />
            </TouchableOpacity>
        </KeyboardAvoidingView>

    )
}

export default AddTaskScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: '10%',
        paddingLeft: '3%',
        paddingRight: '3%',
        paddingBottom: '5%',
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: '#3466AA',
    },

    one: {
        backgroundColor: '#EAEFF6',
        height: '10%',
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 8,
    },

    two: {
        backgroundColor: '#EAEFF6',
        height: '50%',
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 8,
        textAlignVertical: 'top',
        color: 'black'
    },

    three: {
        height: '20%',
        borderRadius: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    three_1: {
        width: '63%',
        borderRadius: 20,
        flexDirection: 'column',
        justifyContent: 'space-between',
    },

    three_1_1: {
        backgroundColor: '#EAEFF6',
        borderRadius: 20,
        height: '44%',
        borderWidth: 1,
        borderColor: '#ccc',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 8,
        paddingRight: 8,
        alignItems: 'center'
    },

    three_2: {
        width: '33%',
        backgroundColor: '#EAEFF6',
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 8,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    four: {
        backgroundColor: '#EAEFF6',
        height: '10%',
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#ccc',
        alignItems: 'center',
        justifyContent: 'center'
    },

    label: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 8,
    },

    date: {
        fontSize: 16,
    },

    dateContainer: {
        alignItems: 'center'
    },

    sliderText: {
        fontSize: 14,
        marginVertical: 16,
    },

    SwitchContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    }
})