import PrimaryButton from "@/src/components/PrimaryButton/PrimaryButton";
import { IMAGES } from "@/src/constants/images";
import ROUTES from "@/src/constants/RouteNames";
import { RootStackParamList } from "@/src/types/navigation";
import { Period } from "@/src/types/timeValue";
import React, { useState } from "react";
import { Image, Text, View } from "react-native";
import TimePicker from "../components/TimePicker";
import TEXT from "../main.text";
import { styles } from "./nightSchedule.styles";

const NightScheduleScreen = ({ navigation }: RootStackParamList) => {
  const [time, setTime] = useState<{
    hour: number;
    minute: number;
    period: Period;
  }>({
    hour: 11,
    minute: 0,
    period: "PM",
  });

  const onPressHandler = () => {
    navigation.navigate(ROUTES.NIGHT_SCHEDULE);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{TEXT.NIGHT_SCREEN_TEXT}</Text>
      </View>
      <View style={styles.bottomContainer}>
        <Image
          source={IMAGES.nightBackground}
          style={styles.image}
          resizeMode="cover"
        />
        <View style={styles.bottom}>
          <TimePicker value={time} onChange={setTime} />
          <PrimaryButton text="GET STARTED" onPress={onPressHandler} />
        </View>
      </View>
    </View>
  );
};

export default NightScheduleScreen;
