import { StyleSheet, Text, View } from "react-native";
import React from "react";
import "../global.css";
import { useFonts } from "expo-font";
import { useEffect } from "react";
import { SplashScreen, Stack } from "expo-router";
import 'react-native-url-polyfill/auto'

const _layout = () => {
  // This is used to Splash the screen while the resources are loading
  SplashScreen.preventAutoHideAsync();
  const [fontsLoaded, error] = useFonts({
    "Poppins-Black": require("../assets/fonts/Poppins-Black.ttf"),
    "Poppins-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
    "Poppins-ExtraBold": require("../assets/fonts/Poppins-ExtraBold.ttf"),
    "Poppins-ExtraLight": require("../assets/fonts/Poppins-ExtraLight.ttf"),
    "Poppins-Light": require("../assets/fonts/Poppins-Light.ttf"),
    "Poppins-Medium": require("../assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
    "Poppins-SemiBold": require("../assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Thin": require("../assets/fonts/Poppins-Thin.ttf"),
  });

  useEffect(() => {
    if (error) throw error;

    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, error]);

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <Stack>
        <Stack.Screen name="index" options={{ title: "Home" , headerShown :false }}
         />
        <Stack.Screen name="(auth)" options={{ title: "auth" , headerShown :false }}
        />
      </Stack>
    </>
  );
};

export default _layout;

const styles = StyleSheet.create({});
