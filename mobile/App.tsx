import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",

    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  textStyle: {
    // color: "#fff",
    fontSize: 20,
  },
});

interface ButtonProps {
  title: string;
}

function Button(props: ButtonProps) {
  return (
    <TouchableOpacity>
      <Text>{props.title}</Text>
    </TouchableOpacity>
  );
}

function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Bem-vindo ao NLW sEports!</Text>
      <Button title="Bora, Bill!" />
      <Button title="Calma aí..." />
      <StatusBar style="auto" />
    </View>
  );
}

export default App;
