// 폰트 적용법
import * as Font from "expo-font";

const [fontLoaded] = Font.useFonts({
  BlackHanSans: require("../assets/BlackHanSans-Regular.ttf"),
});

// fontLoaded && {fontFamily "BlackHanSans"}
