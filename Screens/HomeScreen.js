import { Text, View, StyleSheet, ScrollView, TouchableOpacity,Image } from 'react-native';

// Icons
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

const HomeScreen = ({navigation}) => {
    return (
        <View style={styles.main}>

            <View style={styles.upperContainer}>
                <Text style={styles.mainHead}>Manage Business</Text>
                <Image style={styles.mainImage} source={require('../assets/main.png')} />
            </View>

            <View style={styles.middleContainer}>

                <Text style={styles.actionsText}>Actions</Text>

                <View style={styles.actionlist}>
                    <TouchableOpacity
                        style={styles.actionitemlist1}
                        onPress={()=>navigation.navigate('Add')}
                    >
                        {/* <Ionicons name="ios-add-circle-outline" size={70} color="#3466AA" /> */}
                        <MaterialCommunityIcons name="clipboard-plus-outline" size={70} color="#3466AA" />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.actionitemlist2}
                        onPress={()=>navigation.navigate('List')}
                    >
                        {/* <Ionicons name="clipboard-outline" size={70} color="#3466AA" /> */}
                        <MaterialCommunityIcons name="clipboard-list-outline" size={70}  color="#3466AA" />

                        <View>
                            <Text style={styles.txt}>All</Text>
                            <Text style={styles.txt}>Tasks</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={styles.actionlist}>
                    <TouchableOpacity
                        style={styles.actionitemlist2}
                        onPress={()=>navigation.navigate('List', {value:"Favourite"})}
                    >
                        {/* <Ionicons name="timer-outline" size={70} color="#3466AA" /> */}
                        <MaterialCommunityIcons name="clipboard-text-outline" size={70} color="#3466AA" />

                        <View>
                            <Text style={styles.txt}>Favourite</Text>
                            <Text style={styles.txt}>Tasks</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.actionitemlist1}
                        onPress={()=>navigation.navigate('List', {value:"Completed"})}
                    >
                        <MaterialCommunityIcons name="clipboard-check-outline" size={70} color="#3466AA" />
                    </TouchableOpacity>
                </View>

                <View style={styles.actionlist}>
                    <TouchableOpacity
                        style={styles.actionitemlist1}
                        onPress={()=>navigation.navigate('List', {value:"Pending"})}
                    >
                        <MaterialIcons name="pending-actions" size={70}  color="#3466AA" />
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.actionitemlist2}
                        onPress={()=>navigation.navigate('List', {value:"Due-Today"})}
                    >
                        {/* <Ionicons name="clipboard-outline" size={70} color="#3466AA" /> */}
                        <MaterialCommunityIcons name="clipboard-alert-outline" size={70}  color="#3466AA" />

                        <View>
                            <Text style={styles.txt}>Pending</Text>
                            <Text style={styles.txt}>Tasks</Text>
                            <Text style={styles.txt}>Today</Text>
                        </View>
                    </TouchableOpacity>
                </View>


            </View>


        </View>
    )
}

export default HomeScreen;

const styles = StyleSheet.create({
    main: {
        flex: 1,
        paddingTop: '10%',
        paddingLeft: '3%',
        paddingRight: '3%',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        backgroundColor: '#3466AA'
    },

    upperContainer: {
        width: '100%',
        height: '33%',
        flexDirection: 'column'
    },

    mainHead: {
        fontSize: 30,
        height: '20%',
        color: '#ffff'
    },

    slider: {
        height: '80%',
        borderRadius: 20,
        backgroundColor: '#EAEFF6',


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

    middleContainer: {
        height: '33%',
        flexDirection: 'column',
        marginTop: '5%',
        justifyContent: 'space-between'
    },

    actionsText: {
        fontSize: 20,
        color: '#ffff'
    },

    actionlist: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: '40%',
        marginTop:'4%'
    },

    actionitemlist1: {
        borderRadius: 20,
        width: '33%',
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
        width: '64%',
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

    shadow: {
        shadowColor: '#ffff',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 1,
        shadowRadius: 3,
    },

    txt:{
        color: '#3466AA',
        fontSize:15
    },

    mainImage:{
        borderRadius:20
    }

})