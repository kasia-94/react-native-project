import React from "react";
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

const PostScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Publication</Text>
        <TouchableOpacity style={styles.buttonLogOut}>
          <ImageBackground
            source={require("../assets/log-out.png")}
            style={styles.image}
          ></ImageBackground>
        </TouchableOpacity>
      </View>
      <View style={styles.userList}>
        <View style={styles.user}>
          <Image
            style={styles.userPhoto}
            source={require("../assets/face.png")}
          />
          <View style={styles.userInfo}>
            <Text style={styles.userName}>Natali Romanova</Text>
            <Text style={styles.userEmail}>email@example.com</Text>
          </View>
        </View>
        <View>
          <View></View>
        </View>
      </View>
      <View style={styles.footer}>
        <View style={styles.footerBtn}>
          <TouchableOpacity
            style={{
              width: 40,
              height: 40,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <ImageBackground
              source={require("../assets/grid.png")}
              style={{ width: 24, height: 24 }}
            ></ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnAddPhoto}>
            <ImageBackground
              source={require("../assets/addPhoto.png")}
              style={{ width: 13, height: 13 }}
            ></ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: 40,
              height: 40,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <ImageBackground
              source={require("../assets/user.png")}
              style={{ width: 24, height: 24 }}
            ></ImageBackground>
          </TouchableOpacity>
        </View>
      </View>
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
  buttonLogOut: {
    position: "absolute",
    right: 16,
    bottom: 10,
    width: 24,
    height: 24,
  },
  image: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    resizeMode: "cover",
  },
  userList: {
    flex: 2,
    marginLeft: 16,
    marginRight: 16,
    marginTop: 32,
    marginBottom: 32,
  },
  user: {
    flexDirection: "row",
  },
  userPhoto: {
    width: 60,
    height: 60,
    borderRadius: 16,
    marginRight: 8,
  },
  userInfo: {
    justifyContent: "center",
  },
  userName: {
    fontSize: 13,
    lineHeight: 15,
    fontFamily: "Roboto-Medium",
    color: "#000000",
  },
  userEmail: {
    fontSize: 13,
    lineHeight: 15,
    fontFamily: "Roboto-Regular",
    color: "#212121",
  },
  footer: {
    height: 83,
    justifyContent: "flex-end",
    borderTopWidth: 1,
    borderTopColor: "#BDBDBD",
  },
  footerBtn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 22,
  },
  btnAddPhoto: {
    width: 70,
    height: 40,
    marginLeft: 31,
    marginRight: 31,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FF6C00",
    borderRadius: 20,
  },
});

export default PostScreen;
