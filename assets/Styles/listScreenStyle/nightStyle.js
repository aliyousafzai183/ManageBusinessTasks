import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3466AA',
        paddingLeft: '3%',
        paddingRight: '3%',
        paddingTop: '8%'
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '5%'
    },
    scrollView: {
        flex: 1,
    },
    taskMain: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomColor: 'lightgray',
        backgroundColor: '#EAEFF6',
        borderBottomWidth: 1,
        borderRadius: 20,
        padding: 10,
        marginTop: '3%'
    },

    toggleButton: {
        marginRight: '3%'
    },

    task: {
        flexDirection: 'column',
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    title: {
        width: '80%',
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: 5,
    },
    favoriteButton: {
        width: '20%',
    },
    dueDate: {
        fontSize: 16,
        marginVertical: 5,
    },

    searchBar: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 13,
        paddingHorizontal: 10,
    },

    searchInput: {
        flex: 1,
        padding: 5,
    },

    searchButton: {
        borderRadius: 5,
        padding: 5,
        marginLeft: 5,
    },
    filterButton: {
        borderRadius: 5,
        padding: 5,
        marginLeft: 5,
    },
})