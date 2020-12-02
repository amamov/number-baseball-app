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
    if (typeof image === "string") {
      // url image
      return Image.prefetch(image);
    } else {
      // assets image
      return Asset.fromModule(image).downloadAsync();
    }
  });

const cacheFonts = (fonts) =>
  fonts.map((font) => {
    if (typeof font === "number") {
      // assets font
      return Asset.fromModule(font).downloadAsync();
    } else {
      return Font.loadAsync(font);
    }
  });

function App() {
  const [isReady, setIsReady] = useState(false);
  const [localData, setLocalData] = useState(null);

  const loadAssets = async () => {
    const loadedData = await loaded_data._W;
    if (loadedData) {
      // 게임을 처음 시작하는 유저들에게 보여지는 화면을 설정 && localdata 불러오기
      setLocalData(loadedData);
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

    const fonts = cacheFonts([
      Ionicons.font,
      require("./assets/BlackHanSans-Regular.ttf"),
      require("./assets/NotoSansMonoCJKkr-Bold.otf"),
      require("./assets/Sunflower-Light.ttf"),
      require("./assets/Sunflower-Medium.ttf"),
    ]);

    return Promise.all([...images, ...fonts]);
  };

  const onFinish = () => setIsReady(true);

  return isReady ? (
    <Provider store={store}>
      <NavigationContainer>
        <Stack localData={localData} />
      </NavigationContainer>
      <StatusBar barStyle="light-content" />
    </Provider>
  ) : (
    <AppLoading
      startAsync={loadAssets}
      onFinish={onFinish}
      onError={(error) => console.log(error.message)}
    />
  );
}

export default App;
