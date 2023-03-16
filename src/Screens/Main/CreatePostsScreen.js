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

const CreatePostsScreen = () => {
  const initialState = {
    name: "",
    location: "",
  };
  const initialStateOnFocus = {
    name: false,
    location: false,
  };
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [state, setState] = useState(initialState);
  const [dimensions, setdimensions] = useState(Dimensions.get("window").width);
  const [isFocused, setIsFocused] = useState(initialStateOnFocus);

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

  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
    setState(initialState);
  };

  const onFocusTextInput = (key) => {
    setIsShowKeyboard(true);
    setIsFocused((prevState) => ({ ...prevState, [key]: true }));
  };

  const onSubmit = () => {
    if (state.name === "" || state.location === "") {
      return;
    }
    setIsShowKeyboard(false);
    Keyboard.dismiss();
    setState(initialState);
  };
  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <View style={styles.container}>
        <View style={styles.userList}>
          <View>
            <View style={{ marginBottom: 8, marginLeft: 16, marginRight: 16 }}>
              <Image
                source={require("../../assets/img1.jpg")}
                style={styles.imagePortfolio}
              />
              <TouchableOpacity style={styles.btnPhoto}>
                <View style={{ width: 24, height: 24, borderRadius: 50 }}>
                  <ImageBackground
                    source={require("../../assets/icons/camera-white.png")}
                    style={{ width: 24, height: 24 }}
                  ></ImageBackground>
                </View>
              </TouchableOpacity>
            </View>
            <TouchableOpacity>
              <Text
                style={{
                  color: "#BDBDBD",
                  marginLeft: 16,
                  marginRight: 16,
                  marginBottom: 48,
                }}
              >
                Edit photo
              </Text>
            </TouchableOpacity>
          </View>
          <View>
            <KeyboardAvoidingView
              behavior={Platform.OS === "ios" ? "padding" : "height"}
            >
              <View
                style={{
                  ...styles.form,
                  width: dimensions,
                }}
              >
                <View style={styles.box}>
                  <TextInput
                    style={{
                      ...styles.input,
                      borderColor: isFocused.name ? "#FF6C00" : "#E8E8E8",
                    }}
                    textAlign={"left"}
                    placeholder={"Name"}
                    value={state.name}
                    onFocus={() => onFocusTextInput("name")}
                    onBlur={() => setIsFocused(initialStateOnFocus)}
                    onChangeText={(value) =>
                      setState((prevState) => ({ ...prevState, name: value }))
                    }
                  />
                </View>
                <View style={styles.box}>
                  <TextInput
                    style={{
                      ...styles.input,
                      borderColor: isFocused.location ? "#FF6C00" : "#E8E8E8",
                    }}
                    textAlign={"left"}
                    placeholder={"Location"}
                    secureTextEntry={true}
                    value={state.location}
                    onFocus={() => onFocusTextInput("location")}
                    onBlur={() => setIsFocused(initialStateOnFocus)}
                    onChangeText={(value) =>
                      setState((prevState) => ({
                        ...prevState,
                        location: value,
                      }))
                    }
                  />
                </View>
                <View style={styles.box}>
                  <TouchableOpacity
                    activeOpacity={0.8}
                    style={styles.button}
                    onPress={onSubmit}
                  >
                    <Text style={styles.textBtn}>Post</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </KeyboardAvoidingView>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
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
    fontSize: 16,
  },
  btnPhoto: {
    position: "absolute",
    top: widthHalf,
    left: widthHalf,
    width: 60,
    height: 60,
    borderRadius: 50,
  },
  imagePortfolio: {
    width: widthFull,
    borderRadius: 8,
  },
  userList: {
    flex: 2,
    marginTop: 32,
    marginBottom: 32,
  },
  box: {
    marginHorizontal: 16,
    marginBottom: 16,
  },
  image: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    resizeMode: "cover",
  },
  text: {
    fontSize: 30,
    lineHeight: 35,
    fontWeight: "bold",
    fontFamily: "Roboto-Medium",
    textAlign: "center",
    marginTop: 32,
    marginBottom: 33,
    color: "#000000",
  },
  form: {
    position: "relative",
    borderTopEndRadius: 25,
    borderTopStartRadius: 25,
    backgroundColor: "#ffffff",
  },
  input: {
    height: 50,
    padding: 15,
    borderBottomWidth: 1,
    borderColor: "#E8E8E8",
    color: "#212121",
  },
  button: {
    paddingBottom: 16,
    paddingTop: 16,
    marginTop: 27,
    borderRadius: 100,
    justifyContent: "center",
    backgroundColor: "#FF6C00",
  },
  textBtn: {
    color: "#ffffff",
    textAlign: "center",
  },
});

export default CreatePostsScreen;
