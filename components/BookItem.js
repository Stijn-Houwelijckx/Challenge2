import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const BookItem = (props) => {
  return (
    <View style={styles.bookItem}>
      <Text style={styles.bookTitle}>{props.bookTitle}</Text>
      <Text style={[styles.bookAuthor, styles.text]}>{props.bookAuthor}</Text>
      <Text style={[styles.bookDescription, styles.text]}>
        {props.bookDescription}
      </Text>

      <View style={styles.bookItemBottomContainer}>
        <Text style={[styles.isbnNumber, styles.text]}>{props.bookISBN}</Text>
        <TouchableOpacity>
          <View style={styles.button}>
            <Text style={[styles.buttonText, styles.text]}>READ</Text>
          </View>
        </TouchableOpacity>
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

  button: {
    borderWidth: 2,
    paddingHorizontal: 8,
    paddingVertical: 2,
    backgroundColor: "#FFF",
    borderColor: "#000",
  },
});

export default BookItem;
