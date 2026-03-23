// import { useRouter } from "expo-router";
import { View } from "react-native";
import InfoCapsule from "@/components/InfoCapsule";
import NavButton from "@/components/NavButton";


export default function Index() {



  return (
    <View className="flex-1 justify-center items-center bg-white px-6">

      <InfoCapsule
        img = {require("../assets/images/image.png")}
        name = "Mark John Milano"
        info= "Frontend Developer"
        age= "20"
        address = "Purok 3 Busay, Daraga, Albay"
      />

      <View className="flex-row justify-center items-center mt-10 gap-4">

       <NavButton
        title = "View My Projects"
        isDark = {true}
        path = "/projects"
       />

       <NavButton
        title = "My Skill"
        isDark = {false}
        path = "/skill"
       />

      </View>
    </View>
  );
}