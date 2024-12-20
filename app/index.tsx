import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { View, Text } from "react-native";

const Layout = () => {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-3xl font-pblack text-red-400">RootLayout </Text>
      <StatusBar style="dark" />
      <Link href={"/home"} style={{ color: "blue" }}>
        Home
      </Link>
    </View>
  );
};

export default Layout;
