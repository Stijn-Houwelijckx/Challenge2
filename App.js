import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text>Open up App.js to start working on your app!</Text> */}

      <View style={styles.titleContainer}>
        <Text style={styles.title}>Bookshop</Text>

        <View style={styles.shoppingCartContainer}>
          <Image
            style={styles.shoppingCartImage}
            source={require("./assets/shopping-cart-icon.png")}
          />
          <Text style={styles.shoppingCartCounter}>1</Text>
        </View>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingHorizontal: 28,
    paddingTop: 50,
  },

  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },

  title: {
    fontSize: 40,
    fontWeight: "500",
  },

  shoppingCartContainer: {
    flexDirection: "row",
    // backgroundColor: "red",
    marginTop: 24,
  },

  shoppingCartCounter: {
    fontSize: 24,
    marginTop: 10,
  },

  shoppingCartImage: {
    width: 30,
    height: 26.56,
  },
});
