import { DarkTheme } from '@react-navigation/native';


export default darkTheme = {
    ...DarkTheme,
    colors: {
        ...DarkTheme.colors,
        primary: '#4ECCA3', // Set the primary color to a dark gray
        SecondaryColor: "#6C757D",
        accentColor: "#FFD166",
        background: '#1E1E1E', // Set the background color to black
        text: '#FFFFFF', // Set the text color to white
    },
};