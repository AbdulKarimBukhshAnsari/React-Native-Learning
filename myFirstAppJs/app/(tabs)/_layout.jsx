import { View, Text, Image } from "react-native";
import React from "react";
import { Tabs } from "expo-router"; // No need for Redirect unless it's being used elsewhere
import { icons } from "../../constants";

const _Layout = () => {
  // Function to design the tab icon
  const TabIcon = ({ icon, color, name, focused }) => {
    return (
      <View className="justify-center items-center gap-1 w-20 mt-4  ">
        <Image
          source={icon}
          resizeMode= 'contain'
          tintColor={color}
          className="w-6 h-6 object-contain"
        />
        <Text
          className={`${focused ? "font-psemibold" : "font-pregular"} text-sm text-white`}
        >
          {name}
        </Text>
      </View>
    );
  };

  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false, // Ensure this is correct
        tabBarActiveTintColor : '#FFA001',
        tabBarInactiveTintColor : '#CDCDE0',
        // tabBarBackground : '#161622'
        tabBarStyle : {
          backgroundColor : '#161622',
          borderTopWidth :1 ,
          borderTopColor : "#232533",
          height : 84,
        }
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.home}
              color={color}
              name="Home"
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="bookmark"
        options={{
          title: "Bookmark",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.bookmark}
              color={color}
              name="Bookmark"
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="create" // Must match the filename in the `/app` directory
        options={{
          title: "Create",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.plus}
              color={color}
              name="Create"
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.profile}
              color={color}
              name="Profile"
              focused={focused}
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default _Layout;
