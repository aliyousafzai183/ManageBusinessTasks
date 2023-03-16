import { StyleSheet } from "react-native";
import darkTheme from "../darkTheme";

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: darkTheme.colors.background,
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
        backgroundColor: darkTheme.colors.SecondaryColor,
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
        color:darkTheme.colors.text
    },
    favoriteButton: {
        width: '20%',
    },
    dueDate: {
        fontSize: 16,
        marginVertical: 5,
        color:darkTheme.colors.text
    },

    searchBar: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: darkTheme.colors.primary,
        borderRadius: 13,
        paddingHorizontal: 10,

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

    searchInput: {
        flex: 1,
        padding: 5,
    },

    searchButton: {
        borderRadius: 5,
        padding: 5,
        marginLeft: 5,
    },
})