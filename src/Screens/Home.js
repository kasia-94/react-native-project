import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

import { AntDesign, Feather, Ionicons } from "@expo/vector-icons";

import PostScreen from "./Main/PostScreen";
import CreatePostsScreen from "./Main/CreatePostsScreen";
import ProfileScreen from "./Main/ProfileScreen";

const MainTab = createBottomTabNavigator();
const AuthStack = createStackNavigator();

const Home = () => {
  return (
    <MainTab.Navigator screenOptions={{ tabBarShowLabel: false }}>
      <MainTab.Screen
        options={{
          tabBarIcon: ({ focused, size, color }) => (
            <AntDesign
              name="appstore-o"
              size={size}
              color="grey"
              focused={focused}
            />
          ),
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 17,
          },
          headerRight: () => (
            <TouchableOpacity style={{ marginRight: 16 }} activeOpacity={0.7}>
              <Feather name="log-out" size={24} color="grey" />
            </TouchableOpacity>
          ),
          tabBarItemStyle: {
            marginTop: 5,
            width: 70,
            height: 40,

            borderRadius: 20,
          },
        }}
        name="Posts"
        component={PostScreen}
      />
      <MainTab.Screen
        options={{
          tabBarIcon: ({ focused, size, color }) => (
            <AntDesign
              name="plus"
              size={size}
              color="white"
              focused={focused}
            />
          ),
          tabBarItemStyle: {
            marginTop: 5,
            width: 70,
            height: 40,

            borderRadius: 20,
            backgroundColor: "#FF6C00",
          },
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 17,
          },
          headerLeft: () => (
            <TouchableOpacity style={{ marginLeft: 16 }} activeOpacity={0.7}>
              <Ionicons name="arrow-back-outline" size={24} color="black" />
            </TouchableOpacity>
          ),
        }}
        name="Create Post"
        component={CreatePostsScreen}
      />
      <MainTab.Screen
        options={{
          tabBarIcon: ({ focused, size, color }) => (
            <Feather name="user" size={size} color="grey" focused={focused} />
          ),
          tabBarItemStyle: {
            marginTop: 5,
            width: 70,
            height: 40,

            borderRadius: 20,
          },
        }}
        name="Profile"
        component={ProfileScreen}
      />
    </MainTab.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Home;
