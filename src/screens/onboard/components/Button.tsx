import { COLORS } from "@/src/theme/colors";
import Feather from "@expo/vector-icons/Feather";
import React from "react";
import { Pressable, StyleSheet, View } from "react-native";

type props = {
  onPress?: () => void;
};

const Button = ({ onPress }: props) => {
  return (
    <View style={styles.border}>
      <Pressable
        style={(state) => [styles.button, state.pressed && styles.pressed]}
        onPress={onPress}
      >
        <Feather name="arrow-right" size={24} color="black" />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  border: {
    width: 70,
    height: 70,
    borderRadius: 35,
    borderRightWidth: 2,
    borderColor: COLORS.primary,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: COLORS.border,
    justifyContent: "center",
    alignItems: "center",
  },
  pressed: {
    opacity: 0.7,
  },
});

export default Button;
