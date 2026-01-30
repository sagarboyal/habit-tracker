import PrimaryButton from "@/src/components/PrimaryButton/PrimaryButton";
import { IMAGES } from "@/src/constants/images";
import React, { useState } from "react";
import { ImageBackground, Text, View } from "react-native";
import TimePicker from "../components/TimePicker";
import TEXT from "../main.text";
import { styles } from "./morningSchedule.styles";

const MorningScheduleScreen = () => {
  const [time, setTime] = useState<{
    hour: number;
    minute: number;
    period: "AM" | "PM";
  }>({
    hour: 7,
    minute: 0,
    period: "AM",
  });

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{TEXT.MORNING_SCREEN_TEXT}</Text>
      </View>
      <ImageBackground
        source={IMAGES.morningBackground}
        style={styles.bottomContainer}
        resizeMode="stretch"
      >
        <View style={styles.bottom}>
          <TimePicker value={time} onChange={setTime} />
          <PrimaryButton text="GET STARTED" />
        </View>
      </ImageBackground>
    </View>
  );
};

export default MorningScheduleScreen;
