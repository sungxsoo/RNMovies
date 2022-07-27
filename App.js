import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";

import React, { useEffect, useState } from "react";
import Root from "./navigation/Root";
import { useColorScheme } from "react-native";
import { darkTheme, lightTheme } from "./styled";
import { ThemeProvider } from "styled-components/native";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
let customFonts = {
  "SpoqaHanSansNeo-Bold": require("./assets/fonts/SpoqaHanSansNeo-Bold.ttf"),
};

const queryClient = new QueryClient();
export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  const isDark = useColorScheme() === "dark";

  const _loadFontsAsync = async () => {
    await Font.loadAsync(customFonts);
    setFontsLoaded(true);
  };

  useEffect(() => {
    _loadFontsAsync();
  }, []);

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        <NavigationContainer>
          <Root />
        </NavigationContainer>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
