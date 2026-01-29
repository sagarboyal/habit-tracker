import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from "./src/navigation/RootNavigator";
import { useAppFonts } from "./src/theme/fonts/fonts";

export default function App() {
  const [fontsLoaded] = useAppFonts();

  if (!fontsLoaded) {
    return null;
  }
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}
