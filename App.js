import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";

import BookItem from "./components/BookItem";

const books = [
  {
    bookTitle: "Book title 1",
    bookAuthor: "by Some Random Dude",
    bookDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer luctus, nulla sit amet pellentesque ultricies, magna nisl vulputate urna, quis feugiat purus enim id ex.",
    bookISBN: "ISBN 978-8-2165-1860-1",
  },
  {
    bookTitle: "Book title 2",
    bookAuthor: "by Some Other Dude",
    bookDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer luctus, nulla sit amet pellentesque ultricies, magna nisl vulputate urna, quis feugiat purus enim id ex.",
    bookISBN: "ISBN 978-2-1425-4227-8",
  },
  {
    bookTitle: "Book title 3",
    bookAuthor: "by Some Random Dude",
    bookDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer luctus, nulla sit amet pellentesque ultricies, magna nisl vulputate urna, quis feugiat purus enim id ex.",
    bookISBN: "ISBN 978-5-9684-0436-7",
  },
  {
    bookTitle: "Book title 4",
    bookAuthor: "by Some Random Dude",
    bookDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer luctus, nulla sit amet pellentesque ultricies, magna nisl vulputate urna, quis feugiat purus enim id ex.",
    bookISBN: "ISBN 978-8-3356-4834-0",
  },
];

export default function App() {
  const renderBookItem = (itemData) => (
    <BookItem
      bookTitle={itemData.item.bookTitle}
      bookAuthor={itemData.item.bookAuthor}
      bookDescription={itemData.item.bookDescription}
      bookISBN={itemData.item.bookISBN}
      onTitlePress={() => bookTitlePressedHandler(itemData.item.bookTitle)}
    />
  );

  const bookTitlePressedHandler = (pressedTitle) => {
    console.log(pressedTitle + " pressed");
  };

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

      <FlatList data={books} renderItem={renderBookItem} />

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

    marginBottom: 28,
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

  // ======================
});
