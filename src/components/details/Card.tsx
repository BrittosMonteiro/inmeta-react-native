import { StyleSheet, Text, View } from "react-native";

function Card({ label, text }: { label: string; text: string }) {
  return (
    <View style={styles.card}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: { marginBottom: 12 },
  label: { fontSize: 14, color: "#666" },
  value: { fontSize: 16, color: "#111" },
});

export { Card };
