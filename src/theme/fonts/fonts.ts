import { useFonts } from "expo-font";

export const useAppFonts = () => {
    return useFonts({
        "Rubik-black": require("../../../assets/fonts/Rubik-Black.ttf"),
        "Rubik-black-italic": require("../../../assets/fonts/Rubik-BlackItalic.ttf"),
        "Rubik-bold": require("../../../assets/fonts/Rubik-Bold.ttf"),
        "Rubik-bold-italic": require("../../../assets/fonts/Rubik-BoldItalic.ttf"),
        "Rubik-extra-bold": require("../../../assets/fonts/Rubik-ExtraBold.ttf"),
        "Rubik-extra-bold-italic": require("../../../assets/fonts/Rubik-ExtraBoldItalic.ttf"),
        "Rubik-italic": require("../../../assets/fonts/Rubik-Italic.ttf"),
        "Rubik-light": require("../../../assets/fonts/Rubik-Light.ttf"),
        "Rubik-light-italic": require("../../../assets/fonts/Rubik-LightItalic.ttf"),
        "Rubik-medium": require("../../../assets/fonts/Rubik-Medium.ttf"),
        "Rubik-medium-italic": require("../../../assets/fonts/Rubik-MediumItalic.ttf"),
        "Rubik-regular": require("../../../assets/fonts/Rubik-Regular.ttf"),
        "Rubik-semi-bold": require("../../../assets/fonts/Rubik-SemiBold.ttf"),
        "Rubik-semi-bold-italic": require("../../../assets/fonts/Rubik-SemiBoldItalic.ttf"),
    });
}