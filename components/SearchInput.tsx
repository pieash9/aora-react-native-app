import { icons, images } from "@/constants";
import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";

type FormFieldProps = {
  title?: string;
  value?: string;
  placeholder?: string;
  handleChangeText?: (e: string) => void;
  otherStyles?: string;
  keyboardType?: "email-address" | "default";
};

const SearchInput = ({
  title,
  value,
  placeholder,
  handleChangeText,
  otherStyles,
  ...props
}: FormFieldProps) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <View className="items-center flex-row relative space-x-4">
      <TextInput
        className="flex-1 text-white font-psemibold text-base border-2 border-black-200 w-full h-16 px-4 bg-black-100 rounded-2xl focus:!border-secondary-200 mt-0.5"
        value={value}
        placeholder={placeholder}
        placeholderTextColor={"#7B7B8B"}
        onChangeText={handleChangeText}
        secureTextEntry={title === "Password" && !showPassword}
      />

      <TouchableOpacity className="absolute right-4">
        <Image className="size-5" resizeMode="contain" source={icons.search} />
      </TouchableOpacity>
    </View>
  );
};

export default SearchInput;
