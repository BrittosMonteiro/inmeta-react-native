import { StyleSheet, Text, View } from "react-native";
import { Icon } from "../ui/icon";

function Completed() {
  return (
    <View style={styles.container}>
      <Icon name="CheckCircleIcon" color="#22C55E" />
      <Text style={styles.text}>Ordem concluída</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 8,
    gap: 4,
  },
  text: { fontSize: 18, fontWeight: 500, color: "#22C55E" },
});

export { Completed };
