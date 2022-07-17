import {
  NavigationContainer,
  DarkTheme,
  DefaultTheme,
} from "@react-navigation/native";
import { useAssets } from "expo-asset";
import { useFonts } from "expo-font";
import React, { useCallback, useEffect, useState } from "react";
import { Text, View, Image } from "react-native";
import Tabs from "./navigation/Tabs";
import { Ionicons } from "@expo/vector-icons";
import AppLoading from "expo-app-loading";
export default function App() {
  const [fonts] = useFonts(Ionicons.font);
  if (!fonts) {
    return <AppLoading />;
  }
  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  );
}
