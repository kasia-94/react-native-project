import React, { useState, useEffect } from "react";
import {
  ImageBackground,
  Image,
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
} from "react-native";

const ProfileScreen = () => {
  const [dimensions, setdimensions] = useState(Dimensions.get("window").width);

  useEffect(() => {
    const onChange = () => {
      const width = Dimensions.get("window").width;

      setdimensions(width);
    };
    Dimensions.addEventListener("change", onChange);
    return () => {
      Dimensions.removeEventListener("change", onChange);
    };
  }, []);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/background.png")}
        style={styles.image}
      >
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <View
            style={{
              ...styles.form,
              width: dimensions,
            }}
          >
            {/* HEADER */}

            <View>
              <View>
                <Image
                  style={styles.photoUser}
                  source={require("../../assets/face.png")}
                />
                <TouchableOpacity style={styles.buttonAdd}>
                  <Image source={require("../../assets/icons/delete.png")} />
                </TouchableOpacity>
              </View>
              <Text style={styles.title}>Natali Romanova</Text>
              <TouchableOpacity style={styles.buttonPrevious}>
                <ImageBackground
                  source={require("../../assets/icons/arrow-left.png")}
                  style={styles.image}
                ></ImageBackground>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: "#FFFFFF",
    fontFamily: "Roboto-Regular",
  },
  image: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    resizeMode: "cover",
  },
  photoUser: {
    position: "absolute",
    left: 128,
    top: -60,
    width: 120,
    height: 120,
    borderRadius: 16,
  },
  buttonAdd: {
    position: "absolute",
    left: 107,
    top: 75,
    width: 25,
    height: 25,
    alignItems: "center",
    justifyContent: "center",
    color: "#FF6C00",
    borderWidth: 1,
    borderColor: "#FF6C00",
    borderRadius: 50,
    backgroundColor: "transparent",
  },
});

export default ProfileScreen;
