import { Image, TextInput, View, StyleSheet } from "react-native";
import SvgUri from 'react-native-svg';
import { icon } from "../assets/IgrejaIcon.svg"
const Login = () => {
    return(
        <View style={styles.content}>
        <SvgUri
          width="300"
          height="300"
          uri={icon}
          style={styles.img}
        />
        <TextInput style={styles.container} placeholder="">Test 1</TextInput>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
      width: "85%",
      height: 50,
      backgroundColor: "#fff",
      color: "#0af",
      
      borderColor: "red",
      borderWidth: 1,
      borderRadius: 5,
      paddingLeft: 10,
    },
    img:{
      borderColor:"red",
      borderWidth:1,
    },
    content:{
      flex: 1,
      alignItems: "center",
      width: "100%",
    }
});
export default Login;
