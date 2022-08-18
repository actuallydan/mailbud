import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import FeatherIcon from "@expo/vector-icons/Feather";
import * as SplashScreen from "expo-splash-screen";
import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
  Inter_900Black,
} from "@expo-google-fonts/inter";

import Logo from "./components/Logo";
import { useEffect } from "react";
import CarouselCards from "./components/Carousel/CarouselCards";

import { darkColor, lightColor } from "./constants/colors";
// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_900Black,
  });

  useEffect(() => {
    async function prepare() {
      if (fontsLoaded) {
        await SplashScreen.hideAsync();
      }
    }

    prepare();
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          marginTop: 20,
          flexGrow: 1,
        }}
      >
        <FeatherIcon
          name="mail"
          size={32}
          color={darkColor}
          style={{ marginBottom: 25 }}
        />
        <Logo style={{ width: "80%", height: "10%", marginBottom: 20 }} />
        <Text
          style={{
            color: darkColor,
            fontFamily: "Inter_500Medium",
          }}
        ></Text>
      </View>
      <View
        style={{
          width: "100%",
        }}
      >
        <CarouselCards />
        <TouchableOpacity onPress={() => {}}>
          <View
            style={{
              backgroundColor: darkColor,
              padding: 10,
              flexDirection: "row",
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                color: lightColor,
                fontFamily: "Inter_500Medium",
                marginRight: 5,
                fontSize: 18,
              }}
            >
              get started
            </Text>
            <FeatherIcon name="chevron-right" size={15} color={lightColor} />
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: lightColor,
    alignItems: "stretch",
    justifyContent: "space-between",
    // padding: 50,
    paddingTop: 50,
  },
});
