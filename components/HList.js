import { FlatList } from "react-native";
import styled from "styled-components";
import VMedia from "./VMedia";

const ListTitle = styled.Text`
  color: white;
  font-size: 18px;
  font-weight: 600;
  margin-left: 30px;
  margin-bottom: 30px;
`;

const ListContainer = styled.View`
  margin-bottom: 40px;
`;

export const HListSeporator = styled.View`
  width: 20px;
`;

const HList = ({ title, data }) => {
  return (
    <ListContainer>
      <ListTitle>{title}</ListTitle>
      <FlatList
        keyExtractor={(item) => item.id + ""}
        horizontal
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={HListSeporator}
        data={data}
        contentContainerStyle={{
          paddingHorizontal: 30,
        }}
        renderItem={({ item }) => (
          <VMedia
            posterPath={item.poster_path}
            originalTitle={item.original_title ?? item.original_name}
            voteAverage={item.vote_average}
          />
        )}
      />
    </ListContainer>
  );
};

export default HList;
