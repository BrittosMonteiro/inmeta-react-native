import { ReactNode } from "react";
import { StyleSheet, Text, View } from "react-native";

type FormCardProps = {
  children: ReactNode;
  label: string;
  error?: string;
};

function FormCard({ children, label, error }: FormCardProps) {
  return (
    <View style={styles.formCard}>
      <Text style={styles.formCardLabel}>{label}</Text>
      {children}
      {error && <Text style={styles.formCardError}>{error}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  formCard: {
    display: "flex",
    flexDirection: "column",
    gap: 4,
  },
  formCardLabel: {
    fontSize: 16,
  },
  formCardError: {
    color: "red",
  },
});

export { FormCard };
