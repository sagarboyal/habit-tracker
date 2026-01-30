import HomeScreen from "@/src/screens/home/HomeScreen";
import OnBoardScreen1 from "@/src/screens/onboard/screens/OnBoardScreen1";
import OnBoardScreen2 from "@/src/screens/onboard/screens/OnBoardScreen2";
import OnBoardScreen3 from "@/src/screens/onboard/screens/OnBoardScreen3";
import OnBoardScreen4 from "@/src/screens/onboard/screens/OnBoardScreen4";
import MorningScheduleScreen from "@/src/screens/timeSchedule/morningSchedule/MorningScheduleScreen";
import NightScheduleScreen from "@/src/screens/timeSchedule/nightSchedule/NightScheduleScreen";
import WelcomeScreen from "@/src/screens/welcome/WelcomeScreen";
import { RootStackParamList } from "@/src/types/navigation";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ROUTES from "../../constants/RouteNames";

const Stack = createNativeStackNavigator<RootStackParamList>();

export function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={ROUTES.WELCOME}
        component={WelcomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={ROUTES.ONBOARD_SCREEN_1}
        component={OnBoardScreen1}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={ROUTES.ONBOARD_SCREEN_2}
        component={OnBoardScreen2}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={ROUTES.ONBOARD_SCREEN_3}
        component={OnBoardScreen3}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={ROUTES.ONBOARD_SCREEN_4}
        component={OnBoardScreen4}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={ROUTES.MORNING_SCHEDULE}
        component={MorningScheduleScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={ROUTES.NIGHT_SCHEDULE}
        component={NightScheduleScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={ROUTES.HOME}
        component={HomeScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
