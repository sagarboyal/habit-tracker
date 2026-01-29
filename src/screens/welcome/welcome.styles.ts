import { COLORS } from "@/src/theme/colors";
import { FONT_FAMILY } from "@/src/theme/fonts/typography";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.primary,
    },
    header: {
        flex: 1,
        justifyContent: "center",
    },
    headerTitleContainer: {
        height: 82,
        justifyContent: "center",
        marginHorizontal: 20
    },
    headerTitle: {
        fontFamily: FONT_FAMILY.bold,
        fontSize: 35,
        textAlign: "center",
        color: COLORS.surface,
    },
    headerSubtitle: {
        fontFamily: FONT_FAMILY.light,
        fontSize: 25,
        textAlign: "center",
        color: COLORS.surface,
    },
    description: {
        fontFamily: FONT_FAMILY.light,
        fontSize: 14,
        textAlign: "left",
        color: COLORS.surface,
    },
    content: {
        flex: 2,
        justifyContent: "center",
        alignItems: "center",
    },
    contentImage: {
        width: 250,
        height: 250,
        top: 10,
        zIndex: 2
    },
    shape: {
        flex: 1,
        backgroundColor: COLORS.darkOrange,
        borderTopRightRadius: 120,
        borderTopLeftRadius: 120,
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
    },
    button: {
        marginTop: 30,
    }
});

export default styles;