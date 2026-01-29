import React from "react";
import { Pressable, StyleProp, Text, TextStyle, ViewStyle } from "react-native";
import defaultStyles from "./PrimaryButton.styles";

type PrimaryButtonProps = {
  text: string;
  textColor?: string;
  backgroundColor?: string;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
};

const PrimaryButton = ({
  text,
  textColor,
  backgroundColor,
  style,
  textStyle,
  onPress,
}: PrimaryButtonProps) => {
  return (
    <Pressable
      onPress={onPress}
      style={[
        defaultStyles.button,
        backgroundColor ? { backgroundColor } : {},
        style,
      ]}
    >
      <Text
        style={[
          defaultStyles.buttonText,
          textColor ? { color: textColor } : {},
          textStyle,
        ]}
      >
        {text}
      </Text>
    </Pressable>
  );
};

export default PrimaryButton;
