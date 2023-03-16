import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

// icons
import { Octicons, AntDesign, Ionicons } from '@expo/vector-icons';
import { useState } from 'react';

const SettingScreen = () => {

    const [notifications, setNotifications] = useState(true);
    const [nightMode, setNightMode] = useState(false);

    const handleNotifications = () => {
        setNotifications(!notifications);
    }

    const handleNightMode = () => {
        setNightMode(!nightMode);
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
                    onPress={handleNightMode}
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
}

export default SettingScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: '10%',
        paddingLeft: '3%',
        paddingRight: '3%',
        paddingBottom: '5%',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        backgroundColor: '#3466AA',
    },

    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: 5,
        color: 'white',
        fontSize: 30
    },

    one: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    actionlist: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: '20%',
        marginTop: '4%'
    },

    actionitemlist1: {
        borderRadius: 20,
        width: '48%',
        backgroundColor: '#EAEFF6',
        alignItems: 'center',
        justifyContent: 'center',

        // shadow
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,

        elevation: 24,
    },

    actionitemlist2: {
        borderRadius: 20,
        width: '48%',
        backgroundColor: '#EAEFF6',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',

        // shadow
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,

        elevation: 24,
    },

    txt: {
        color: '#3466AA'
    }

})