import { IMAGES } from "@/src/constants/images";
import ROUTES from "@/src/constants/RouteNames";
import { RootStackParamList } from "@/src/types/navigation";
import React from "react";
import { Image, Text, View } from "react-native";
import Button from "../components/Button";
import { styles } from "../onboard.styles";
import { ONBOARD_TEXT } from "../onboard.text";

const OnBoardScreen2 = ({ navigation }: RootStackParamList) => {
  const onPressNext = () => {
    navigation.navigate(ROUTES.ONBOARD_SCREEN_3);
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={IMAGES.onBoardBackground2} resizeMode="contain" />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{ONBOARD_TEXT.screen2.TITLE}</Text>
        <Text style={styles.subtitle}>{ONBOARD_TEXT.screen2.SUBTITLE}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button onPress={onPressNext} />
      </View>
    </View>
  );
};

export default OnBoardScreen2;
