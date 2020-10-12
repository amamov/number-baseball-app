import React, { useState } from "react";
import { Image } from "react-native";
import { Provider } from "react-redux";
import { AppLoading } from "expo";
import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";
import * as Font from "expo-font";
import { Asset } from "expo-asset";
import { NavigationContainer } from "@react-navigation/native";
import { store } from "./store";

import Stack from "./navigation/Stack";

const cacheImages = (images) =>
  images.map((image) => {
    if (typeof image === "string") return Image.prefetch(image);
    else return Asset.fromModule(image).downloadAsync();
  });
const cacheFonts = (fonts) => fonts.map((font) => Font.loadAsync(font));

function App() {
  const [isReady, setIsReady] = useState(false);
  const [fontLoaded] = Font.useFonts({
    NanumPenScript: require("./assets/NanumPenScript-Regular.ttf"),
  });

  const loadAssets = () => {
    const images = cacheImages([
      "https://images.unsplash.com/photo-1503104834685-7205e8607eb9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      require("./assets/splash.png"),
    ]);

    const fonts = cacheFonts([Ionicons.font]);

    return Promise.all([...images, ...fonts]);
  };

  const onFinish = () => setIsReady(true);

  return isReady && fontLoaded ? (
    // <Text style={{ fontFamily: "NanumPenScript" }}>hello fucking world</Text>
    <>
      <Provider store={store}>
        <NavigationContainer>
          <Stack />
        </NavigationContainer>
        <StatusBar barStyle="light-content" />
      </Provider>
    </>
  ) : (
    <AppLoading
      startAsync={loadAssets}
      onFinish={onFinish}
      onError={(error) => console.log(error.message)}
    />
  );
}

export default App;
