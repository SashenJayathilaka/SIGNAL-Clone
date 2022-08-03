import { View, Text } from "react-native";
import React, { useState, useEffect } from "react";
import { ListItem, Avatar } from "react-native-elements";
import { db } from "../firebase";

export default function CustomListitem({ id, chatName, enterChat }) {
  const [chatMessages, setChatMessages] = useState([]);

  useEffect(() => {
    const unSubscribe = db
      .collection("chats")
      .doc(id)
      .collection("messages")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setChatMessages(snapshot.docs.map((doc) => doc.data()))
      );
    return unSubscribe;
  });

  return (
    <ListItem onPress={() => enterChat(id, chatName)} key={id} bottomDivider>
      <Avatar
        rounded
        source={{
          uri: chatMessages?.[0]?.photoURL,
        }}
      />
      <ListItem.Content>
        <ListItem.Title style={{ fontWeight: "800" }}>
          {chatName}
        </ListItem.Title>
        <ListItem.Subtitle numberOfLines={1} ellipsizeMode="tail">
          {chatMessages?.[0]?.displayName}: {chatMessages?.[0]?.message}
        </ListItem.Subtitle>
      </ListItem.Content>
    </ListItem>
  );
}
