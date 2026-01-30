import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import RootNavigator from "./src/navigation/RootNavigator";
import rootStore from "./src/store/rootStore";
import { useAppFonts } from "./src/theme/fonts/fonts";

export default function App() {
  const [fontsLoaded] = useAppFonts();

  if (!fontsLoaded) {
    return null;
  }
  return (
    <Provider store={rootStore}>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </Provider>
  );
}
