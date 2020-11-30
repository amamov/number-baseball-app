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
import { loaded_data } from "./local_storage";

const cacheImages = (images) =>
  images.map((image) => {
    if (typeof image === "string") return Image.prefetch(image);
    else return Asset.fromModule(image).downloadAsync();
  });
const cacheFonts = (fonts) => fonts.map((font) => Font.loadAsync(font));

function App() {
  const [isReady, setIsReady] = useState(false);
  const [init, setInit] = useState(false);

  const loadAssets = () => {
    if (loaded_data._W) {
      // 게임을 처음 시작하는 유저들에게 보여지는 화면을 설정
      setInit(true);
    }

    const images = cacheImages([
      require("./assets/splash.png"),
      require("./assets/three.png"),
      require("./assets/four.png"),
      require("./assets/five.png"),
      require("./assets/homethree.png"),
      require("./assets/homefour.png"),
      require("./assets/homefive.png"),
      require("./assets/homebg.png"),
      require("./assets/rule/baseball.png"),
      require("./assets/rule/calculator.png"),
      require("./assets/rule/check.png"),
      require("./assets/rule/downArrow.png"),
      require("./assets/rule/sbo.png"),
      require("./assets/rule/upArrow.png"),
    ]);

    const fonts = cacheFonts([Ionicons.font]);

    return Promise.all([...images, ...fonts]);
  };

  const onFinish = () => setIsReady(true);

  return isReady ? (
    <>
      <Provider store={store}>
        <NavigationContainer>
          <Stack init={init} />
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
