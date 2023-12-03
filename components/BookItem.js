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
      <TouchableOpacity style={styles.bookTitle} onPress={props.onTitlePress}>
        <Text>{props.bookTitle}</Text>
      </TouchableOpacity>

      <Text style={[styles.bookAuthor, styles.text]}>{props.bookAuthor}</Text>
      <Text style={[styles.bookDescription, styles.text]}>
        {props.bookDescription}
      </Text>

      <View style={styles.bookItemBottomContainer}>
        <Text style={[styles.isbnNumber, styles.text]}>{props.bookISBN}</Text>
        <ReadBtn btnText="READ" onBookRead={bookReadHandler} />
        <AddBtn btnText="ADD" onBookRead={bookAddHandler} />
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
