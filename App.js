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

const initialBooks = [
  {
    bookTitle: "Book title 1",
    bookAuthor: "by Some Random Dude",
    bookDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer luctus, nulla sit amet pellentesque ultricies, magna nisl vulputate urna, quis feugiat purus enim id ex.",
    bookISBN: "ISBN 978-8-2165-1860-1",
    bookStock: "5",
  },
  {
    bookTitle: "Book title 2",
    bookAuthor: "by Some Other Dude",
    bookDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer luctus, nulla sit amet pellentesque ultricies, magna nisl vulputate urna, quis feugiat purus enim id ex.",
    bookISBN: "ISBN 978-2-1425-4227-8",
    bookStock: "7",
  },
  {
    bookTitle: "Book title 3",
    bookAuthor: "by Some Random Dude",
    bookDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer luctus, nulla sit amet pellentesque ultricies, magna nisl vulputate urna, quis feugiat purus enim id ex.",
    bookISBN: "ISBN 978-5-9684-0436-7",
    bookStock: "3",
  },
  {
    bookTitle: "Book title 4",
    bookAuthor: "by Some Random Dude",
    bookDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer luctus, nulla sit amet pellentesque ultricies, magna nisl vulputate urna, quis feugiat purus enim id ex.",
    bookISBN: "ISBN 978-8-3356-4834-0",
    bookStock: "2",
  },
];

export default function App() {
  const [shoppingCartCount, setShoppingCartCount] = useState(0);
  const [books, setBooks] = useState(initialBooks);

  const renderBookItem = (itemData) => (
    <BookItem
      bookTitle={itemData.item.bookTitle}
      bookAuthor={itemData.item.bookAuthor}
      bookDescription={itemData.item.bookDescription}
      bookISBN={itemData.item.bookISBN}
      bookStock={itemData.item.bookStock}
      onTitlePress={() => bookTitlePressedHandler(itemData.item.bookTitle)}
      onAddToCart={() => addToCartHandler(itemData.item)}
    />
  );

  const bookTitlePressedHandler = (pressedTitle) => {
    console.log(pressedTitle + " pressed");
  };

  const addToCartHandler = (selectedBook) => {
    // Check if the stock is greater than 0 before proceeding
    if (parseInt(selectedBook.bookStock, 10) === 0) {
      console.log("Cannot add item to cart. Stock is 0.");
      return;
    }

    // Assuming you're updating the state and stock here
    setShoppingCartCount((prevCount) => prevCount + 1);

    // You can update the book stock accordingly
    const updatedBooks = books.map((book) => {
      if (book.bookISBN === selectedBook.bookISBN) {
        // If it's the selected book, update stock
        const updatedStock = String(parseInt(book.bookStock, 10) - 1);
        return { ...book, bookStock: updatedStock };
      } else {
        // If it's not the selected book, keep it unchanged
        return book;
      }
    });

    // Update the state or data source with the new book array
    setBooks(updatedBooks);
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Bookshop</Text>

        <View style={styles.shoppingCartContainer}>
          <Image
            style={styles.shoppingCartImage}
            source={require("./assets/shopping-cart-icon.png")}
          />
          <Text style={styles.shoppingCartCounter}>{shoppingCartCount}</Text>
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
