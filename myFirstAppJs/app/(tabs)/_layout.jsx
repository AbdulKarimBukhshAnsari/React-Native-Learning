import { View, Text, Image } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { icons } from "../../constants";

const TabIcon = ({ icon, color, name, focused }) => (
  <View className="justify-center items-center gap-1">
    <View className="w-6 h-6 overflow-hidden">
      <Image
        source={icon}
        style={{
          width: "100%",
          height: "100%",
          resizeMode: "contain",
          tintColor: color,
        }}
      />
    </View>
    <Text className={`${focused ? "font-psemibold" : "font-pregular"} text-sm`}>
      {name}
    </Text>
  </View>
);

const _Layout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: { height: 60 },
      }}
    >
      {[
        { name: "home", title: "Home", icon: icons.home },
        { name: "bookmark", title: "Bookmark", icon: icons.bookmark },
        { name: "create", title: "Create", icon: icons.plus },
        { name: "profile", title: "Profile", icon: icons.profile },
      ].map(({ name, title, icon }) => (
        <Tabs.Screen
          key={name}
          name={name}
          options={{
            title: title,
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon icon={icon} color={color} name={title} focused={focused} />
            ),
          }}
        />
      ))}
    </Tabs>
  );
};

export default _Layout;
