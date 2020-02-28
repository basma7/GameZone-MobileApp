import React from "react";
import { Text, View } from "react-native";
import { globalStyles } from "../styles/global";

export default function App() {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.text}>Home screen</Text>
    </View>
  );
}

