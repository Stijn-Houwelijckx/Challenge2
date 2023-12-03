import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const ReadBtnItem = (props) => {
  return (
    <TouchableOpacity onPress={props.onBookRead}>
      <View style={styles.button}>
        <Text style={[styles.buttonText, styles.text]}>{props.btnText}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderWidth: 2,
    paddingHorizontal: 8,
    paddingVertical: 2,
    backgroundColor: "#FFF",
    borderColor: "#000",
  },
});

export default ReadBtnItem;
