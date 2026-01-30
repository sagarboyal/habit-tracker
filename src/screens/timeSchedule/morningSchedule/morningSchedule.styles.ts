import { COLORS } from "@/src/theme/colors";
import { FONT_FAMILY } from "@/src/theme/fonts/typography";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.primary + "B3"
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
    },
    bottom: {
        height: 280,
        backgroundColor: COLORS.primary,
        justifyContent: "flex-start",
    },
});

export { styles };

