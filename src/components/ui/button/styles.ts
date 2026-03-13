import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  button: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
    gap: 4,
    borderRadius: 4,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "500",
  },
  bgPrimary: {
    backgroundColor: "#3B82F6",
  },
  bgDanger: {
    backgroundColor: "#EF4444",
  },
  bgSuccess: {
    backgroundColor: "#22C55E",
  },
  bgNeutral: {
    backgroundColor: "transparent",
  },
  bgWarning: {
    backgroundColor: "#FBBF24",
  },

  textWhite: {
    color: "#FFFFFF",
  },
  textNeutral: {
    color: "#000000",
  },

  disabled: {
    opacity: 0.5,
  },
});

const bgVariantStyles = {
  primary: styles.bgPrimary,
  danger: styles.bgDanger,
  success: styles.bgSuccess,
  warning: styles.bgWarning,
  neutral: styles.bgNeutral,
};

const textVariantStyles = {
  primary: styles.textWhite,
  danger: styles.textWhite,
  success: styles.textWhite,
  warning: styles.textNeutral,
  neutral: styles.textNeutral,
};

export { bgVariantStyles, styles, textVariantStyles };
