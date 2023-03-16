import { StyleSheet } from "react-native";
import darkTheme from '../darkTheme';

export default nightStyle = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: '10%',
        paddingLeft: '3%',
        paddingRight: '3%',
        paddingBottom: '5%',
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: darkTheme.colors.background,
    },

    title: {
        width: '80%',
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: 5,
        color: darkTheme.colors.text,
        fontSize: 30,
        
    },

    one: {
        backgroundColor: darkTheme.colors.SecondaryColor,
        height: '10%',
        borderRadius: 20,
        padding: 8,

        // shadow
        shadowColor: darkTheme.colors.primary,
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,

        elevation: 24,
    },

    two: {
        backgroundColor: darkTheme.colors.SecondaryColor,
        borderRadius: 20,
        padding: 8,
        textAlignVertical: 'top',
        color: 'black',

        // shadow
        shadowColor: darkTheme.colors.primary,
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,

        elevation: 24,
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
        backgroundColor: darkTheme.colors.primary,
        borderRadius: 20,
        height: '44%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 8,
        paddingRight: 8,
        alignItems: 'center'
    },

    three_2: {
        width: '33%',
        backgroundColor: darkTheme.colors.primary,
        borderRadius: 20,
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center'
    },

    four: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',

        // shadow
        shadowColor: darkTheme.colors.primary,
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,

        elevation: 24,
    },

    label: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 8,
        color: darkTheme.colors.text
    },

    date: {
        fontSize: 16,
        color: darkTheme.colors.text
    },

    dateContainer: {
        alignItems: 'center',
    },

    sliderText: {
        fontSize: 14,
        marginVertical: 16,
        color: darkTheme.colors.text
    },

    SwitchContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
})