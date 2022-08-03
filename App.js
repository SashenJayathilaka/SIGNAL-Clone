import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./screen/LoginScreen";
import RegistrarScreen from "./screen/RegistrarScreen";
import HomeScreen from "./screen/HomeScreen";
import AddChatScreen from "./screen/AddChatScreen";
import ChatScreen from "./screen/ChatScreen";

const Stack = createNativeStackNavigator();

const globleScreenOction = {
  headerStyle: { backgroundColor: "#2C6BED" },
  headerTitleStyle: { color: "#fff" },
  headerTinColor: "#fff",
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={globleScreenOction}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Registrar" component={RegistrarScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="AddChat" component={AddChatScreen} />
        <Stack.Screen name="Chat" component={ChatScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
