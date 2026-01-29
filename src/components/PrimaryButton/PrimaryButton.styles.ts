import { COLORS } from "@/src/theme/colors";
import { FONT_FAMILY } from "@/src/theme/fonts/typography";
import { StyleSheet } from "react-native";

const defaultStyles = StyleSheet.create({
    button: {
        width: "90%",
        height: 63,
        backgroundColor: COLORS.background,
        marginHorizontal: 21,
        borderRadius: 38,
        justifyContent: "center",
    },
    buttonText: {
        fontFamily: FONT_FAMILY.medium,
        fontSize: 14,
        textAlign: "center",
    },
});

export default defaultStyles;