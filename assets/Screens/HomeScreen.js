import { Text, View, TouchableOpacity, Image } from 'react-native';
import { connect } from 'react-redux';

// Icons
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

// styles
import styles from '../Styles/homeScreenStyle/style';
import nightStyle from '../Styles/homeScreenStyle/nightStyle';
import darkTheme from '../Styles/darkTheme';

// carousel
// import Carousel from 'react-native-snap-carousel';

const HomeScreen = ({ navigation, nightMode }) => {

    return (
        <View style={nightMode ? nightStyle.main : styles.main}>
            <View style={styles.upperContainer}>
                <Text style={styles.mainHead}>Manage Business</Text>
                <View style={nightMode ? nightStyle.ImageContainer : styles.ImageContainer}>
                    <View style={nightMode ? nightStyle.textContainer : styles.textContainer}>
                        <Text style={nightMode ? nightStyle.slidertxt : styles.slidertxt}>Manage Your</Text>
                        <Text style={nightMode ? nightStyle.slidertxt : styles.slidertxt}>Tasks In</Text>
                        <Text style={nightMode ? nightStyle.slidertxt : styles.slidertxt}>One Place</Text>
                    </View>
                    <View>
                        <Image source={require('../Instruction3.png')} />
                    </View>
                </View>
            </View>

            <View style={styles.middleContainer}>

                <Text style={styles.actionsText}>Actions</Text>

                <View style={styles.actionlist}>
                    <TouchableOpacity
                        style={nightMode ? nightStyle.actionitemlist1 : styles.actionitemlist1}
                        onPress={() => navigation.navigate('Add')}
                    >
                        <MaterialCommunityIcons name="clipboard-plus-outline" size={70} color={nightMode ? darkTheme.colors.text : "#3466AA"} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={nightMode ? nightStyle.actionitemlist2 : styles.actionitemlist2}
                        onPress={() => navigation.navigate('List')}
                    >
                        <MaterialCommunityIcons name="clipboard-list-outline" size={70} color={nightMode ? darkTheme.colors.text : "#3466AA"} />

                        <View>
                            <Text style={nightMode ? nightStyle.txt : styles.txt}>All</Text>
                            <Text style={nightMode ? nightStyle.txt : styles.txt}>Tasks</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={styles.actionlist}>
                    <TouchableOpacity
                        style={nightMode ? nightStyle.actionitemlist2 : styles.actionitemlist2}
                        onPress={() => navigation.navigate('List', { value: "Favourite" })}
                    >
                        <MaterialCommunityIcons name="clipboard-text-outline" size={70} color={nightMode ? darkTheme.colors.text : "#3466AA"} />

                        <View>
                            <Text style={nightMode ? nightStyle.txt : styles.txt}>Favourite</Text>
                            <Text style={nightMode ? nightStyle.txt : styles.txt}>Tasks</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={nightMode ? nightStyle.actionitemlist1 : styles.actionitemlist1}
                        onPress={() => navigation.navigate('List', { value: "Completed" })}
                    >
                        <MaterialCommunityIcons name="clipboard-check-outline" size={70} color={nightMode ? darkTheme.colors.text : "#3466AA"} />
                    </TouchableOpacity>
                </View>

                <View style={styles.actionlist}>
                    <TouchableOpacity
                        style={nightMode ? nightStyle.actionitemlist1 : styles.actionitemlist1}
                        onPress={() => navigation.navigate('List', { value: "Pending" })}
                    >
                        <MaterialIcons name="pending-actions" size={70} color={nightMode ? darkTheme.colors.text : "#3466AA"} />
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={nightMode ? nightStyle.actionitemlist2 : styles.actionitemlist2}
                        onPress={() => navigation.navigate('List', { value: "Due-Today" })}
                    >
                        <MaterialCommunityIcons name="clipboard-alert-outline" size={70} color={nightMode ? darkTheme.colors.text : "#3466AA"} />

                        <View>
                            <Text style={nightMode ? nightStyle.txt : styles.txt}>Pending</Text>
                            <Text style={nightMode ? nightStyle.txt : styles.txt}>Tasks</Text>
                            <Text style={nightMode ? nightStyle.txt : styles.txt}>Today</Text>
                        </View>
                    </TouchableOpacity>
                </View>


            </View>

        </View>
    )
}

const mapStateToProps = state => ({
    nightMode: state.nightMode
});


export default connect(mapStateToProps)(HomeScreen);