import CustomButton from "@/components/CustomButton";
import { images } from "@/constants";
import { useGlobalContext } from "@/context/GlobalProvider";
import { Link, Redirect, router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { View, Text, ScrollView, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import "react-native-url-polyfill/auto";

const App = () => {
  const { loading, isLogged } = useGlobalContext();

  if (!loading && isLogged) return <Redirect href="/home" />;
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="w-full justify-center items-center min-h-[85vh] px-4">
          <Image
            className="w-[130px] h-[50px]"
            resizeMode="contain"
            source={images.logo}
          />

          <Image
            source={images.cards}
            className="max-w-[330px] w-full h-[250px]"
            resizeMode="contain"
          />

          <View className="relative mt-5">
            <Text className="text-4xl text-white font-bold text-center">
              Discover Endless Possibilities with{" "}
              <Text className="text-secondary-200">Aora</Text>
            </Text>

            <Image
              source={images.path}
              className="w-[136px] h-[15px] absolute -bottom-2 -right-8"
              resizeMode="contain"
            />
          </View>
          <Text className="text-gray-100 text-sm  font-pregular mt-5 text-center">
            Where Creativity Meets Innovation: Embark on a Journey of Limitless
            Exploration with Aora
          </Text>

          <CustomButton
            title="Continue with Email"
            handlePress={() => router.push("/sign-in")}
            containerStyles="w-full mt-7"
          />
        </View>
      </ScrollView>
      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
};

export default App;
