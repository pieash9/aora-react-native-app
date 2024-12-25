import EmptyState from "@/components/EmptyState";
import InfoBox from "@/components/InfoBox";
import VideoCard from "@/components/VideoCard";
import { icons } from "@/constants";
import { useGlobalContext } from "@/context/GlobalProvider";
import { IPost } from "@/interface";
import { getUserPosts, signOut } from "@/lib/appwrite";
import useAppwriteHook from "@/lib/useAppwriteHook";
import { router } from "expo-router";
import { View, FlatList, TouchableOpacity, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Profile = () => {
  const { user, setUser, setIsLogged } = useGlobalContext();
  const {
    data: posts,
    isLoading,
    refetch,
  } = useAppwriteHook(() => getUserPosts(user?.$id as string));

  const logout = async () => {
    await signOut();
    setUser(null);
    setIsLogged(false);
    router.replace("/sign-in");
  };

  return (
    <SafeAreaView className="flex-1 bg-primary h-full">
      <FlatList
        data={posts as IPost[]}
        keyExtractor={(item) => item.$id}
        renderItem={({ item }) => <VideoCard video={item} />}
        ListHeaderComponent={() => (
          <View className="w-full justify-center items-center mt-6 mb-12 px-4">
            <TouchableOpacity
              className="w-full items-end mb-10"
              onPress={logout}
            >
              <Image
                source={icons.logout}
                resizeMode="contain"
                className="size-6"
              />
            </TouchableOpacity>

            <View className="size-16 border border-secondary rounded-lg justify-center items-center">
              <Image
                source={{ uri: user?.avatar }}
                className="size-[90%] rounded-lg"
                resizeMode="cover"
              />
            </View>

            <InfoBox
              title={user?.username}
              containerStyles="mt-5"
              titleStyles="text-lg"
            />

            <View className="mt-5 flex-row ">
              <InfoBox
                title={posts.length || 0}
                subTitle="Posts"
                containerStyles="mr-10"
                titleStyles="text-xl"
              />
              <InfoBox
                title={"1.2k"}
                subTitle="Followers"
                titleStyles="text-xl"
              />
            </View>
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

export default Profile;
