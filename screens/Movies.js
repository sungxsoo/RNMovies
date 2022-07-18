import React from "react";
import styled from "styled-components/native";
import Swiper from "react-native-web-swiper";
import { Dimensions } from "react-native";

const Container = styled.ScrollView`
  background-color: ${(props) => props.theme.mainBgColor};
`;

const View = styled.View`
  flex: 1;
`;

const { height: SCREEN_HEIGHT } = Dimensions.get("window");

const Movies = () => (
  <Container>
    <Swiper
      loop={true}
      timeout={4}
      controlsProps={{
        prevTitle: "<",
        nextTitle: ">",
        dotsTouchable: true,
      }}
      containerStyle={{ width: "100%", height: SCREEN_HEIGHT / 4 }}
    >
      <View style={{ backgroundColor: "red" }}></View>
      <View style={{ backgroundColor: "blue" }}></View>
      <View style={{ backgroundColor: "green" }}></View>
      <View style={{ backgroundColor: "white" }}></View>
    </Swiper>
  </Container>
);

export default Movies;
