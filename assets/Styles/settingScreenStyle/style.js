import { StyleSheet } from "react-native";


export default styles = StyleSheet.create({
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