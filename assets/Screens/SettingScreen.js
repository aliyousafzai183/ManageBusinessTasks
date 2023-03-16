import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

import { connect, Connect } from 'react-redux';

// icons
import { Octicons, AntDesign, Ionicons } from '@expo/vector-icons';
import { useState } from 'react';

// styles
import styles from '../Styles/settingScreenStyle/style';
import nightStyle from '../Styles/settingScreenStyle/nightStyle';

const SettingScreen = ({nightMode, toggleNightMode}) => {

    const [notifications, setNotifications] = useState(true);

    const handleNotifications = () => {
        setNotifications(!notifications);
    }

    return (
        <View style={[styles.container, { backgroundColor: nightMode ? '#222222' : '#3466AA' }]}>

            <View style={styles.one}>
                <Text style={[styles.title, { color: nightMode ? 'white' : 'white' }]}>Settings</Text>
                <AntDesign name="plussquareo" size={35} color={nightMode ? 'white' : 'white'} />
            </View>

            <View style={styles.actionlist}>
                <TouchableOpacity
                    style={[styles.actionitemlist1, { opacity: notifications ? 1 : 0.8,backgroundColor: nightMode ? "#464646" : "#EAEFF6" }]}
                    activeOpacity={1}
                    onPress={handleNotifications}
                >
                    <Ionicons name={notifications ? 'notifications-outline' : 'notifications-off-outline'} size={70} color={nightMode ? 'white' : '#3466AA'} />
                    <Text style={[styles.txt, { color: nightMode ? 'white' : '#3466AA' }]}>{notifications ? "ON" : "OFF"}</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.actionitemlist1, { backgroundColor: nightMode ? "#464646" : "#EAEFF6" }]}
                    activeOpacity={1}
                    onPress={toggleNightMode}
                >
                    <Ionicons name={nightMode ? 'md-sunny-outline' : 'ios-moon-outline'} size={70} color={nightMode ? 'white' : '#3466AA'} />
                    <Text style={[styles.txt, { color: nightMode ? 'white' : '#3466AA' }]}>{nightMode ? "Light" : "Dark"}</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.actionlist}>
                <View style={[styles.actionitemlist1, {backgroundColor: nightMode ? "#464646" : "#EAEFF6" }]}>
                    <Octicons name="versions" size={70} color={nightMode ? 'white' : '#3466AA'} />
                    <Text style={[styles.txt, { color: nightMode ? 'white' : '#3466AA' }]}>Version: 1.0.0</Text>
                </View>

                <View style={[styles.actionitemlist1, {backgroundColor: nightMode ? "#464646" : "#EAEFF6" }]}>
                    <AntDesign name="like2" size={70} color={nightMode ? 'white' : '#3466AA'} />
                    <Text style={[styles.txt, { color: nightMode ? 'white' : '#3466AA' }]}>Rate Us</Text>
                </View>
            </View>

        </View>
    )
};

const mapStateToProps = state => ({
    nightMode: state.nightMode
});

const mapDispatchToProps = dispatch => ({
    toggleNightMode: () => dispatch({type: 'TOGGLE_NIGHT_MODE'})
});

export default connect(mapStateToProps, mapDispatchToProps)(SettingScreen);