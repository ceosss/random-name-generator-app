import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import "@react-native-firebase/app";
import firestore from "@react-native-firebase/firestore";

export default function App() {
  useEffect(() => {
    firestore()
      .collection("demo")
      .doc("Vc21OgYkwhReOaTXhRlt")
      .get()
      .then((doc) => console.log(doc.data()));
  }, []);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Random Name Generator!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "800",
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 10,
    elevation: 2,
  },
});
