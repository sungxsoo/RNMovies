import React from "react";
import styled from "styled-components/native";
import Poster from "./Poster";
import Votes from "./Votes";

const Movie = styled.View`
  align-items: center;
`;

const Title = styled.Text`
  color: white;
  font-weight: 600;
  margin-top: 7px;
  margin-bottom: 5px;
`;

const VMedia = ({ posterPath, originalTitle, voteAverage }) => (
  <Movie>
    <Poster path={posterPath} />
    <Title>
      {originalTitle.slice(0, 13)}
      {originalTitle.length > 13 ? "..." : null}
    </Title>
    <Votes votes={voteAverage} />
  </Movie>
);

export default VMedia;
