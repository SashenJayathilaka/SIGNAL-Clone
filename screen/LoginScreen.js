import { View, Text, StyleSheet } from "react-native";
import React, { useState, useEffect } from "react";
import { Button, Input, Image } from "react-native-elements";
import { StatusBar } from "expo-status-bar";
import { KeyboardAvoidingView } from "react-native";
import { auth } from "../firebase";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const unSubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        navigation.replace("Home");
      }
    });

    return unSubscribe;
  }, []);

  const signIn = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .catch((error) => alert(error));
  };

  return (
    <KeyboardAvoidingView behavior="height" style={styles.container}>
      <StatusBar style="light" />
      <Image
        source={{
          uri: "https://upload.wikimedia.org/wikipedia/commons/5/56/Logo_Signal..png",
        }}
        style={{ width: 200, height: 200 }}
      />
      <View style={styles.inputContainer}>
        <Input
          placeholder="Email"
          autoFocus
          type="email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <Input
          placeholder="Password"
          secureTextEntry
          type="pasword"
          value={password}
          onChangeText={(text) => setPassword(text)}
          onSubmitEditing={signIn}
        />
      </View>
      <Button containerStyle={styles.button} onPress={signIn} title="Login" />
      <Button
        containerStyle={styles.button}
        title="Register"
        type="outline"
        onPress={() => navigation.navigate("Registrar")}
      />
      <View style={{ height: 100 }} />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    width: 300,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    width: 200,
    marginTop: 10,
  },
});
