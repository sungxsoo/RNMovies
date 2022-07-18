import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, TouchableOpacity } from "react-native";

const Screen1 = ({ navigation: { navigate } }) => (
  <TouchableOpacity onPress={() => navigate("Two")}>
    <Text>ONE</Text>
  </TouchableOpacity>
);
const Screen2 = ({ navigation: { navigate } }) => (
  <TouchableOpacity onPress={() => navigate("Three")}>
    <Text>TWO</Text>
  </TouchableOpacity>
);
const Screen3 = ({ navigation: { goBack } }) => (
  <View>
    <TouchableOpacity onPress={() => goBack()}>
      <Text>Three</Text>
    </TouchableOpacity>
  </View>
);
const NativeStack = createNativeStackNavigator();

const Stack = () => (
  <NativeStack.Navigator
    screenOptions={{
      headerBackTitleVisible: false,
    }}
  >
    <NativeStack.Screen name="One" component={Screen1} />
    <NativeStack.Screen name="Two" component={Screen2} />
    <NativeStack.Screen name="Three" component={Screen3} />
  </NativeStack.Navigator>
);
export default Stack;
