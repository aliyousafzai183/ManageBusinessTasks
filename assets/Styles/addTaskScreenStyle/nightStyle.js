import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: '10%',
        paddingLeft: '3%',
        paddingRight: '3%',
        paddingBottom: '5%',
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: '#3466AA',
    },

    title: {
        width: '80%',
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: 5,
        color: 'white',
        fontSize: 30
    },

    one: {
        backgroundColor: '#EAEFF6',
        height: '10%',
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 8,
    },

    two: {
        backgroundColor: '#EAEFF6',
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 8,
        textAlignVertical: 'top',
        color: 'black'
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
        backgroundColor: '#EAEFF6',
        borderRadius: 20,
        height: '44%',
        borderWidth: 1,
        borderColor: '#ccc',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 8,
        paddingRight: 8,
        alignItems: 'center'
    },

    three_2: {
        width: '33%',
        backgroundColor: '#EAEFF6',
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#ccc',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center'
    },

    four: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    label: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 8,
    },

    date: {
        fontSize: 16,
    },

    dateContainer: {
        alignItems: 'center',
    },

    sliderText: {
        fontSize: 14,
        marginVertical: 16,
    },

    SwitchContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    }
})