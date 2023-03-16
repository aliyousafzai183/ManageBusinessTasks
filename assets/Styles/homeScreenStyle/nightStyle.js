import { StyleSheet } from "react-native"
import darkTheme from '../darkTheme';
export default styles = StyleSheet.create({
    main: {
        flex: 1,
        paddingTop: '10%',
        paddingLeft: '3%',
        paddingRight: '3%',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        backgroundColor: darkTheme.colors.background
    },

    upperContainer: {
        width: '100%',
        height: '33%',
        flexDirection: 'column'
    },

    mainHead: {
        fontSize: 30,
        height: '20%',
        color: darkTheme.colors.text
    },

    slider: {
        height: '80%',
        borderRadius: 20,
        backgroundColor: darkTheme.colors.SecondaryColor,


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

    middleContainer: {
        height: '33%',
        flexDirection: 'column',
        marginTop: '5%',
        justifyContent: 'space-between'
    },

    actionsText: {
        fontSize: 20,
        color: darkTheme.colors.text
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
        backgroundColor: darkTheme.colors.SecondaryColor,
        alignItems: 'center',
        justifyContent: 'center',

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

    actionitemlist2: {
        borderRadius: 20,
        width: '64%',
        backgroundColor: darkTheme.colors.SecondaryColor,
        flexDirection: 'row',
        justifyContent: 'center',
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

    shadow: {
        shadowColor: '#ffff',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 1,
        shadowRadius: 3,
    },

    txt:{
        color: '#e6e8e6',
        fontSize:15
    },

    mainImage:{
        borderRadius:20
    }

})