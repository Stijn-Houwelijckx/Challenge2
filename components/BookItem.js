import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

import ReadBtn from "./ReadBtn";
import AddBtn from "./AddBtn";

const BookItem = (props) => {
  const bookReadHandler = () => {
    console.log(props.bookTitle + " read");
  };

  const bookAddHandler = () => {
    console.log(props.bookTitle + " added");
  };

  return (
    <View style={styles.bookItem}>
      <TouchableOpacity onPress={props.onTitlePress}>
        <Text style={styles.bookTitle}>{props.bookTitle}</Text>
      </TouchableOpacity>

      <View style={styles.bookItemTopContainer}>
        <Text style={[styles.bookAuthor, styles.text]}>{props.bookAuthor}</Text>
        <View style={styles.stockContainer}>
          <Text style={[styles.bookStock, styles.text]}>Stock:</Text>
          <Text style={[styles.bookStockCounter, styles.text]}>
            {props.bookStock}
          </Text>
        </View>
      </View>

      <Text style={[styles.bookDescription, styles.text]}>
        {props.bookDescription}
      </Text>

      <View style={styles.bookItemBottomContainer}>
        <Text style={[styles.isbnNumber, styles.text]}>{props.bookISBN}</Text>
        <ReadBtn btnText="READ" onBookRead={bookReadHandler} />
        <AddBtn btnText="ADD" onAddToCart={props.onAddToCart} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bookItem: {
    borderBottomWidth: 2,
    paddingRight: 5,
    paddingBottom: 16,

    marginBottom: 12,
  },

  bookTitle: {
    fontSize: 24,
    fontWeight: "500",
  },

  text: {
    fontWeight: "500",
  },

  bookItemTopContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  stockContainer: {
    flexDirection: "row",
  },

  bookDescription: {
    marginVertical: 12,
  },

  bookItemBottomContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});

export default BookItem;
