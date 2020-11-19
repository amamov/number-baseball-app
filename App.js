import React, { useState } from "react";
import { Image, StatusBar } from "react-native";
import { Provider } from "react-redux";
import { AppLoading } from "expo";
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

  const loadAssets = () => {
    const images = cacheImages([
      "https://images.unsplash.com/photo-1503104834685-7205e8607eb9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      require("./assets/splash.png"),
      require("./assets/homethree.png"),
      require("./assets/homefour.png"),
      require("./assets/homefive.png"),
      require("./assets/homebg.png"),
    ]);

    const fonts = cacheFonts([Ionicons.font]);

    return Promise.all([...images, ...fonts]);
  };

  const onFinish = () => setIsReady(true);

  return isReady ? (
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
