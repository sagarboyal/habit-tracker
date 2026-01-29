import React from "react";
import { Image, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import PrimaryButton from "@/src/components/PrimaryButton/PrimaryButton";
import { IMAGES } from "@/src/constants/images";
import { RootStackParamList } from "@/src/types/navigation";
import styles from "./welcome.styles";
import { WELCOME_TEXT } from "./welcome.text";

const WelcomeScreen = ({ navigation }: RootStackParamList) => {
  const insets = useSafeAreaInsets();
  const onPressHandler = () => {
    console.log(navigation);
  };
  return (
    <View style={styles.container}>
      <View style={[styles.header, { paddingTop: insets.top + 20 }]}>
        <View style={styles.headerTitleContainer}>
          <Text style={styles.headerTitle}>{WELCOME_TEXT.TITLE}</Text>
          <Text style={styles.headerSubtitle}>{WELCOME_TEXT.SUBTITLE}</Text>
        </View>
      </View>

      <View style={styles.content}>
        <Image
          source={IMAGES.welcomeBackground}
          style={styles.contentImage}
          resizeMode="contain"
        />
        <View style={styles.shape}>
          <Text style={styles.description}>{WELCOME_TEXT.DESCRIPTION}</Text>
          <Text style={styles.description}>{WELCOME_TEXT.SUBDESCRIPTION}</Text>
          <PrimaryButton
            text={WELCOME_TEXT.BUTTON_TITLE}
            style={styles.button}
            onPress={onPressHandler}
          />
        </View>
      </View>
    </View>
  );
};

export default WelcomeScreen;
