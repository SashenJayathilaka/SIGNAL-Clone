import { View, StyleSheet } from "react-native";
import React, { useState, useLayoutEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { KeyboardAvoidingView } from "react-native";
import { Button, Input, Text } from "react-native-elements";
import { auth } from "../firebase";

export default function RegistrarScreen({ navigation }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  useLayoutEffect(() => {
    navigation.setOptions({
      headerBackTitle: "Back to Login",
    });
  }, [navigation]);

  const register = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((authUser) => {
        authUser.user.updateProfile({
          displayName: name,
          photoURL: imageUrl,
        });
      })
      .catch((error) => alert(error.message));
  };

  return (
    <KeyboardAvoidingView behavior="height" style={styles.container}>
      <StatusBar style="light" />
      <Text h3 style={{ marginBottom: 50 }}>
        Create a Single Account
      </Text>
      <View style={styles.inputContainer}>
        <Input
          placeholder="Full Name"
          autoFocus
          type="text"
          value={name}
          onChangeText={(text) => setName(text)}
        />
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
        />
        <Input
          placeholder="Profile Picture URL (optional)"
          autoFocus
          type="text"
          value={imageUrl}
          onChangeText={(text) => setImageUrl(text)}
          onSubmitEditing={register}
        />
      </View>
      <Button
        containerStyle={styles.button}
        title="Register"
        raised
        onPress={register}
      />
      <View style={{ height: 100 }} />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    backgroundColor: "#fff",
  },
  button: {
    width: 200,
  },
  inputContainer: {
    width: 300,
  },
});
