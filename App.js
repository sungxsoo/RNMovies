import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import React from "react";
import Tabs from "./navigation/Tabs";
import { Ionicons } from "@expo/vector-icons";
import Stack from "./navigation/Stack";
import Root from "./navigation/Root";
import { useColorScheme } from "react-native";
import { darkTheme, lightTheme } from "./styled";
import { ThemeProvider } from "styled-components/native";
export default function App() {
  const isDark = useColorScheme() === "dark";

  const [fonts] = useFonts(Ionicons.font);
  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <NavigationContainer>
        <Root />
      </NavigationContainer>
    </ThemeProvider>
  );
}
