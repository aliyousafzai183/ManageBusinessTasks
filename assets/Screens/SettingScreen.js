import { Text, View, TouchableOpacity } from 'react-native';

import { connect } from 'react-redux';

// icons
import { Octicons, AntDesign, Ionicons } from '@expo/vector-icons';
import { useState } from 'react';

// styles
import styles from '../Styles/settingScreenStyle/style';
import nightStyle from '../Styles/settingScreenStyle/nightStyle';
import darkTheme from '../Styles/darkTheme';

const SettingScreen = ({nightMode, toggleNightMode}) => {

    const [notifications, setNotifications] = useState(true);

    const handleNotifications = () => {
        setNotifications(!notifications);
    }

    return (
        <View style={nightMode ? nightStyle.container : styles.container}>

            <View style={nightMode ? nightStyle.one : styles.one}>
                <Text  style={nightMode ? nightStyle.title : styles.title}>Settings</Text>
                <AntDesign name="setting" size={35} color={nightMode ? darkTheme.colors.accentColor : 'white'} />
            </View>

            <View style={nightMode ? nightStyle.actionlist : styles.actionlist}>
                <TouchableOpacity
                    style={[nightMode ? nightStyle.actionitemlist1 : styles.actionitemlist1, { opacity: notifications ? 1 : 0.8}]}
                    activeOpacity={1}
                    onPress={handleNotifications}
                >
                    <Ionicons name={notifications ? 'notifications-outline' : 'notifications-off-outline'} size={70} color={nightMode ? 'white' : '#3466AA'} />
                    <Text style={[styles.txt, { color: nightMode ? darkTheme.colors.text : '#3466AA' }]}>{notifications ? "ON" : "OFF"}</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[nightMode ? nightStyle.actionitemlist1 : styles.actionitemlist1]}
                    activeOpacity={1}
                    onPress={toggleNightMode}
                >
                    <Ionicons name={nightMode ? 'md-sunny-outline' : 'ios-moon-outline'} size={70} color={nightMode ? darkTheme.colors.text : '#3466AA'} />
                    <Text style={[styles.txt, { color: nightMode ? darkTheme.colors.text : '#3466AA' }]}>{nightMode ? "Light" : "Dark"}</Text>
                </TouchableOpacity>
            </View>

            <View style={nightMode ? nightStyle.actionlist : styles.actionlist}>
                <View style={nightMode ? nightStyle.actionitemlist1 : styles.actionitemlist1}>
                    <Octicons name="versions" size={70} color={nightMode ? darkTheme.colors.text : '#3466AA'} />
                    <Text style={nightMode ? nightStyle.txt : styles.txt}>Version: 1.0.0</Text>
                </View>

                <View style={nightMode ? nightStyle.actionitemlist1 : styles.actionitemlist1}>
                    <AntDesign name="like2" size={70} color={nightMode ? darkTheme.colors.text : '#3466AA'} />
                    <Text style={[styles.txt, { color: nightMode ? darkTheme.colors.text : '#3466AA' }]}>Rate Us</Text>
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