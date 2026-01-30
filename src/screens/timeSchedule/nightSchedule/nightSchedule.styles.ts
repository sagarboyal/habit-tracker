import { COLORS } from "@/src/theme/colors";
import { FONT_FAMILY } from "@/src/theme/fonts/typography";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4D57C8"
  },
  header: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    fontFamily: FONT_FAMILY.semiBold,
    fontSize: 30,
    color: COLORS.surface,
    marginHorizontal: 60,
    textAlign: "center"
  },
  bottomContainer: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "red"
  },
  image: {
    width: "100%",
  },
  bottom: {
    height: 280,
    backgroundColor: "#3E4ACA",
    justifyContent: "flex-start",
  },
});

export { styles };

