import React from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from "react-native";

const PostScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.userList}>
        <View style={styles.user}>
          <Image
            style={styles.userPhoto}
            source={require("../../assets/face.png")}
          />
          <View style={styles.userInfo}>
            <Text style={styles.userName}>Natali Romanova</Text>
            <Text style={styles.userEmail}>email@example.com</Text>
          </View>
        </View>
        <View>
          <View style={{ marginBottom: 32 }}>
            <Image
              source={require("../../assets/img1.jpg")}
              style={styles.imagePortfolio}
            />
            <Text style={styles.text}>Forest</Text>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Image
                  style={styles.icon}
                  source={require("../../assets/icons/message-circle.png")}
                />
                <Text style={{ color: "#BDBDBD" }}>0</Text>
              </View>
              <View style={{ flexDirection: "row" }}>
                <Image
                  style={styles.icon}
                  source={require("../../assets/icons/map-pin.png")}
                />
                <Text>Ivano-Frankivsk</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const widthFull = "100%";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: "#FFFFFF",
    fontFamily: "Roboto-Regular",
    fontSize: 16,
  },
  imagePortfolio: {
    width: widthFull,
    borderRadius: 8,
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
    marginBottom: 32,
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
  icon: {
    marginRight: 9,
  },
});

export default PostScreen;
