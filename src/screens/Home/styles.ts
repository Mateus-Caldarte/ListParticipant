import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    Container: {
      flex: 1,
      paddingTop: 54,
      paddingLeft: 24,
      paddingRight: 24,
      backgroundColor: "#131016",
    },
    Title: {
      color: "#FDFCFE",
      fontSize: 26,
      fontWeight: "bold",
    },
    Subtitle: {
      color: "#6B6B6B",
      fontSize: 16,
    },
    Input:{
        flex: 1,
        height: 56,
        backgroundColor: '#1F1525',
        color: '#FFF',
        padding: 15,
        fontSize: 18,
        borderRadius: 5,
        marginRight: 12,
    },
    TextButton:{
        color: '#FFF',
        fontSize: 26
    },
    Button: {
        height: 56,
        width: 56,
        backgroundColor: '#31CF67',
        borderRadius: 5, 
        justifyContent: "center",
        alignItems: "center",
    },
    Form:{
        width: '100%',
        flexDirection: "row",
        marginTop: 20,
        marginBottom: 20
    },
    list:{
      color: "#FFF",
      fontSize: 16,
    }
  });
  