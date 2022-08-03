import { View, StyleSheet } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { Button, Input, Text } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import { auth, db } from "../firebase";

export default function AddChatScreen({ navigation }) {
  const [input, setInput] = useState("");

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Add a New Chat",
      headerBackTitle: "Chat",
    });
  }, [navigation]);

  const createChat = async () => {
    await db
      .collection("chats")
      .add({
        chatName: input,
      })
      .then(() => {
        navigation.goBack();
      })
      .catch((error) => alert(error));
  };

  return (
    <View style={styles.container}>
      <Input
        placeholder="Enter a Chat Name"
        value={input}
        onChangeText={(text) => setInput(text)}
        onSubmitEditing={createChat}
        leftIcon={
          <Icon name="wechat" type="antdesign" size={24} color="#000" />
        }
      />
      <Button
        disabled={!input}
        onPress={createChat}
        title="Create a new Chat"
      ></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    padding: 30,
    height: "100%",
  },
});
