import { StyleSheet } from "react-native";
import darkTheme from "../darkTheme";

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: '10%',
        paddingLeft: '3%',
        paddingRight: '3%',
        paddingBottom: '5%',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        backgroundColor: darkTheme.colors.background,
    },

    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: 5,
        color: darkTheme.colors.text,
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
        marginTop: '4%',
    },

    actionitemlist1: {
        borderRadius: 20,
        width: '48%',
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
        width: '48%',
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

    txt: {
        color: darkTheme.colors.text
    }

})