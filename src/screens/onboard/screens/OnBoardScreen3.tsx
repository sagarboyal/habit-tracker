import { IMAGES } from "@/src/constants/images";
import ROUTES from "@/src/constants/RouteNames";
import { RootStackParamList } from "@/src/types/navigation";
import React from "react";
import { Image, Text, View } from "react-native";
import Button from "../components/Button";
import { styles } from "../onboard.styles";
import { ONBOARD_TEXT } from "../onboard.text";

const OnBoardScreen3 = ({ navigation }: RootStackParamList) => {
  const onPressNext = () => {
    navigation.navigate(ROUTES.ONBOARD_SCREEN_4);
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={IMAGES.onBoardBackground3} resizeMode="contain" />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{ONBOARD_TEXT.screen3.TITLE}</Text>
        <Text style={styles.subtitle}>{ONBOARD_TEXT.screen3.SUBTITLE}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button onPress={onPressNext} />
      </View>
    </View>
  );
};

export default OnBoardScreen3;
