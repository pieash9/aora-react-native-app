import { icons, images } from "@/constants";
import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";

type FormFieldProps = {
  title: string;
  value: string;
  placeholder?: string;
  handleChangeText: (e: string) => void;
  otherStyles?: string;
  keyboardType?: "email-address" | "default";
};

const FormField = ({
  title,
  value,
  placeholder,
  handleChangeText,
  otherStyles,
  ...props
}: FormFieldProps) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <View className={`space-y-2 ${otherStyles}`}>
      <Text className="text-base text-gray-100 font-pmedium mb-1">
        {title}{" "}
      </Text>

      <View className="items-center flex-row relative">
        <TextInput
          className="flex-1 text-white font-psemibold text-base border-2 border-black-200 w-full h-16 px-4 bg-black-100 rounded-2xl focus:!border-secondary-200"
          value={value}
          placeholder={placeholder}
          placeholderTextColor={"#7B7B8B"}
          onChangeText={handleChangeText}
          secureTextEntry={title === "Password" && !showPassword}
        />

        {title === "Password" && (
          <TouchableOpacity
            className="absolute right-4"
            onPress={() => setShowPassword(!showPassword)}
          >
            <Image
              className="size-7"
              resizeMode="contain"
              source={!showPassword ? icons.eye : icons.eyeHide}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default FormField;
