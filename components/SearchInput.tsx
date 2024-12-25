import { icons, images } from "@/constants";
import { router, usePathname } from "expo-router";
import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";

const SearchInput = ({ initialQuery }: { initialQuery?: string }) => {
  const pathname = usePathname();
  const [query, setQuery] = useState(initialQuery || "");
  return (
    <View className="items-center flex-row relative">
      <TextInput
        className="flex-1 text-white font-psemibold text-base border-2 border-black-200 w-full h-16 px-4 bg-black-100 rounded-2xl focus:!border-secondary-200 mt-0.5"
        value={query}
        placeholder="Search for videos, creators..."
        placeholderTextColor={"#CDCDE0"}
        onChangeText={(e) => setQuery(e)}
      />

      <TouchableOpacity
        onPress={() => {
          if (!query) {
            return Alert.alert(
              "Missing Query",
              "Please enter a query to search for"
            );
          }

          if (pathname.startsWith("/search")) router.setParams({ query });
          else router.push(`/search/${query}`);
        }}
        className="absolute right-4"
      >
        <Image className="size-5" resizeMode="contain" source={icons.search} />
      </TouchableOpacity>
    </View>
  );
};

export default SearchInput;
