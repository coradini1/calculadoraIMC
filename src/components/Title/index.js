import React from "react";
import { View, Text } from "react-native";
import { StyleSheet } from "react-native";
export default function Title() {
  return (
    <View>
      <Text style={styles.titulo}>IMC</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  titulo: {
    fontWeight: "bold",
  },
});
