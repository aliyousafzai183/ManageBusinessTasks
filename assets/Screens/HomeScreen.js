import { Text, View, StyleSheet, ScrollView, TouchableOpacity,Image } from 'react-native';
import { useState } from 'react';
// Icons
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

// styles
import styles from '../Styles/homeScreenStyle/style';

const HomeScreen = ({navigation}) => {
    const [nightMode, setNightMode] = useState(false);
    return (
        <View style={styles.main}>

            <View style={styles.upperContainer}>
                <Text style={styles.mainHead}>Manage Business</Text>
                <Image style={styles.mainImage} source={require('../main.png')} />
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