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
    </Stack.Navigator>
  );
}
