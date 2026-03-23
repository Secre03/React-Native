import { Text, Pressable } from "react-native";
import React from "react";
import { useRouter } from "expo-router";

interface NavButtonProps {
  title: string;
  isDark: boolean;
  path: "/" | "/skill" | "/projects";
}

const NavButton = ({ title, isDark, path }: NavButtonProps) => {
  const router = useRouter();
  
  return (
    <Pressable
      className={`${isDark ? "bg-black" : "bg-white"} rounded-full px-6 py-3 shadow-lg`}
      onPress={() => router.push(path)}
    >
      <Text 
        className={`${isDark ? "text-white" : "text-black"} text-sm font-bold text-center`}
      >
        {title}
      </Text>
    </Pressable>
  );
};

export default NavButton;