import React, { useState, useEffect } from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
  Dimensions,
  Image,
} from "react-native";
const CommentsScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Comments</Text>
        <TouchableOpacity style={styles.buttonPrevious}>
          <ImageBackground
            source={require("../assets/icons/arrow-left.png")}
            style={styles.image}
          ></ImageBackground>
        </TouchableOpacity>
      </View>
      <View style={styles.main}>
        <Image
          source={require("../assets/img1.jpg")}
          style={styles.imagePortfolio}
        />
      </View>
    </View>
  );
};

const widthFull = "100%";
const widthHalf = "50%";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: "#FFFFFF",
    fontFamily: "Roboto-Regular",
  },
  header: {
    position: "relative",
    height: 88,
    justifyContent: "flex-end",
    borderBottomWidth: 1,
    borderBottomColor: "#BDBDBD",
  },
  title: {
    marginBottom: 11,
    fontSize: 17,
    lineHeight: 22,
    fontFamily: "Roboto-Bold",
    textAlign: "center",
    color: "#000000",
  },
  buttonPrevious: {
    position: "absolute",
    left: 16,
    bottom: 10,
    width: 24,
    height: 24,
  },
  image: {
    position: "relative",
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    resizeMode: "cover",
  },
  main: {
    flex: 2,
    marginTop: 32,
    marginBottom: 32,
    marginHorizontal: 16,
    marginBottom: 16,
  },
  imagePortfolio: {
    width: widthFull,
    borderRadius: 8,
  },
});

export default CommentsScreen;
