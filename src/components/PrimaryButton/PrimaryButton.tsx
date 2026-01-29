import React from "react";
import { Pressable, StyleProp, Text, TextStyle, ViewStyle } from "react-native";
import defaultStyles from "./PrimaryButton.styles";

type PrimaryButtonProps = {
  text: string;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
};

const PrimaryButton = ({
  text,
  style,
  textStyle,
  onPress,
}: PrimaryButtonProps) => {
  return (
    <Pressable onPress={onPress} style={[defaultStyles.button, style]}>
      <Text style={[defaultStyles.buttonText, textStyle]}>{text}</Text>
    </Pressable>
  );
};

export default PrimaryButton;
