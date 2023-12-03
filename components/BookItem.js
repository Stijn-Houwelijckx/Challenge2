import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

import ReadBtnItem from "./ReadBtnItem";

const BookItem = (props) => {
  const bookReadHandler = () => {
    console.log(props.bookTitle + " read");
  };

  return (
    <View style={styles.bookItem}>
      <TouchableOpacity style={styles.bookTitle} onPress={props.onTitlePress}>
        <Text>{props.bookTitle}</Text>
      </TouchableOpacity>

      <Text style={[styles.bookAuthor, styles.text]}>{props.bookAuthor}</Text>
      <Text style={[styles.bookDescription, styles.text]}>
        {props.bookDescription}
      </Text>

      <View style={styles.bookItemBottomContainer}>
        <Text style={[styles.isbnNumber, styles.text]}>{props.bookISBN}</Text>
        <ReadBtnItem btnText="READ" onBookRead={bookReadHandler} />
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
