import { COLORS } from "@/src/theme/colors";
import { FONT_FAMILY } from "@/src/theme/fonts/typography";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.surface,
    },
    header: {
        marginBottom: "10%"
    },
    textContainer: {
        flex: 1,
        marginHorizontal: 20,
    },
    title: {
        fontFamily: FONT_FAMILY.bold,
        fontSize: 24,
    },
    subtitle: {
        fontFamily: FONT_FAMILY.regular,
        fontSize: 16,
        marginTop: 8,
    },
    buttonContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "flex-end",
        marginRight: 20,
    },
});