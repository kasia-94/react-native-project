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
} from "react-native";

const LoginScreen = ({ navigation }) => {
  const initialState = {
    login: "",
    email: "",
    password: "",
  };
  const initialStateOnFocus = {
    login: false,
    email: false,
    password: false,
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
    if (state.login === "" || state.email === "" || state.password === "") {
      return;
    }
    setIsShowKeyboard(false);
    Keyboard.dismiss();
    setState(initialState);
  };

  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <View style={styles.container}>
        <ImageBackground
          source={require("../../../src/assets/background.png")}
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
              <Text style={styles.text}>Login</Text>
              <View style={styles.box}>
                <TextInput
                  style={{
                    ...styles.input,
                    borderColor: isFocused.email ? "#FF6C00" : "#E8E8E8",
                  }}
                  textAlign={"left"}
                  placeholder={"E-mail"}
                  value={state.email}
                  onFocus={() => onFocusTextInput("email")}
                  onBlur={() => setIsFocused(initialStateOnFocus)}
                  onChangeText={(value) =>
                    setState((prevState) => ({ ...prevState, email: value }))
                  }
                />
              </View>
              <View style={styles.box}>
                <TextInput
                  style={{
                    ...styles.input,
                    borderColor: isFocused.password ? "#FF6C00" : "#E8E8E8",
                  }}
                  textAlign={"left"}
                  placeholder={"Password"}
                  secureTextEntry={true}
                  value={state.password}
                  onFocus={() => onFocusTextInput("password")}
                  onBlur={() => setIsFocused(initialStateOnFocus)}
                  onChangeText={(value) =>
                    setState((prevState) => ({ ...prevState, password: value }))
                  }
                />
                <TouchableOpacity style={styles.buttonShow}>
                  <Text style={styles.textBtnShow}>Show</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.box}>
                <TouchableOpacity
                  activeOpacity={0.8}
                  style={styles.button}
                  onPress={onSubmit}
                >
                  <Text style={styles.textBtn}>Sign in</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.box}>
                <TouchableOpacity
                  onPress={() => navigation.navigate("Register")}
                >
                  <Text style={styles.textBtnBottom}>
                    Don't have an account? Register
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    fontFamily: "Roboto-Regular",
    marginBottom: 62,
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
    padding: 16,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    backgroundColor: "#F6F6F6",
    borderRadius: 8,
    fontSize: 16,
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
    fontSize: 16,
    color: "#ffffff",
    textAlign: "center",
  },
  buttonShow: {
    position: "absolute",
    right: 16,
    top: 12,
  },
  textBtnShow: {
    color: "#1B4371",
    fontSize: 16,
    textAlign: "right",
  },
  textBtnBottom: {
    color: "#1B4371",
    fontSize: 16,
    textAlign: "center",
  },
});

export default LoginScreen;
