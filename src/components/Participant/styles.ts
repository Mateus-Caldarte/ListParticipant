import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    Container:{
        width: '100%',
        backgroundColor: '#1F1E25',
        flexDirection: 'row',
        borderRadius: 5,
        marginTop: 12,
    },
    ContainerButton:{
        flex: 1,
        justifyContent: "center",
    },
    Name:{
        color: '#FFF',
        marginLeft: 15,
        fontSize: 18,
    },
    TextButton:{
        color: '#FFF',
        fontSize: 26,
    },
    Button: {
        height: 56,
        width: 56,
        backgroundColor: '#ff1414',
        borderRadius: 5, 
        justifyContent: "center",
        alignItems: "center",
    },
})