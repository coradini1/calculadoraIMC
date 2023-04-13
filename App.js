import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Title from "./src/components/Title/index";
import Main from "./src/components/Main/index/";
import Form from "./src/components/Form/index/";

export default function App() {
  return (
    <View style={styles.container}>
      <Title />
      <Main />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    border: "1px solid black",
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
});
