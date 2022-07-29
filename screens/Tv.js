import react, { useEffect, useState } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";

import {
  View,
  Text,
  ActivityIndicator,
  ScrollView,
  FlatList,
  RefreshControl,
} from "react-native";
import styled from "styled-components";
import HList, { HListSeporator } from "../components/HList";
import { tvApi } from "../api";

const API_KEY = "ae94e412e2843e8304eef7bc604ff6a9";

const Loader = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Tv = () => {
  const queryClient = useQueryClient();
  const [refreshing, setRefreshing] = useState(false);
  const { isLoading: trendingLoading, data: trendingData } = useQuery(
    ["tvs", "trending"],
    tvApi.trending
  );
  const { isLoading: airingTodayLoading, data: airingTodayData } = useQuery(
    ["tvs", "airingToday"],
    tvApi.airingToday
  );
  const { isLoading: topRatedLoading, data: topRatedData } = useQuery(
    ["tvs", "topRated"],
    tvApi.topRated
  );
  const onRefresh = async () => {
    setRefreshing(true);
    await queryClient.refetchQueries(["tvs"]);
    setRefreshing(false);
  };

  const loading = trendingLoading || airingTodayLoading || topRatedLoading;

  if (loading) {
    return <Loader />;
  }
  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
      contentContainerStyle={{ paddingVertical: 30 }}
    >
      <HList title="Trending TV" data={trendingData?.results}></HList>
      <HList title="Airing Toaday" data={airingTodayData?.results}></HList>
      <HList title="TopRated TV" data={topRatedData?.results}></HList>
    </ScrollView>
  );
};

export default Tv;
