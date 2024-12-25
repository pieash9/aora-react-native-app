import EmptyState from "@/components/EmptyState";
import SearchInput from "@/components/SearchInput";
import VideoCard from "@/components/VideoCard";
import { IPost } from "@/interface";
import { searchPosts } from "@/lib/appwrite";
import useAppwriteHook from "@/lib/useAppwriteHook";
import { useLocalSearchParams } from "expo-router";
import { useEffect } from "react";
import { View, Text, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Search = () => {
  const { query } = useLocalSearchParams();
  const {
    data: posts,
    isLoading,
    refetch,
  } = useAppwriteHook(() => searchPosts(query as string));

  useEffect(() => {
    refetch();
  }, [query]);

  return (
    <SafeAreaView className="flex-1 bg-primary h-full">
      <FlatList
        data={posts as IPost[]}
        keyExtractor={(item) => item.$id}
        renderItem={({ item }) => <VideoCard video={item} />}
        ListHeaderComponent={() => (
          <View className="my-6 px-4 space-y-6">
            <Text className="font-pmedium text-sm text-gray-100">
              Search Result
            </Text>
            <Text className="text-2xl font-psemibold text-white">{query}</Text>

            <SearchInput initialQuery={query as string} />
          </View>
        )}
        ListEmptyComponent={() => (
          <EmptyState
            title="No Videos Found"
            subtitle="No videos found for this query"
          />
        )}
      />
    </SafeAreaView>
  );
};

export default Search;
