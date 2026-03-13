import { WorkOrderCard } from "@/src/domain/dtos/work-order";
import { router } from "expo-router";
import { Pressable, StyleSheet, Text } from "react-native";
import { STATUS } from "./type";

function Card({ order }: { order: WorkOrderCard }) {
  return (
    <Pressable
      accessibilityRole="button"
      style={styles.item}
      onPress={() => router.push(`/work-order/details/${order.id}`)}
    >
      <Text style={styles.title}>{order.title}</Text>
      <Text style={styles.subtitle}>{order.assignedTo}</Text>
      <Text style={styles.status}>{STATUS[order.status]}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  item: { padding: 12, backgroundColor: "#fafafa", borderRadius: 8 },
  title: { fontSize: 16, fontWeight: "500" },
  subtitle: { marginTop: 4, color: "#666" },
  status: { marginTop: 4, color: "#666", alignSelf: "flex-end" },
});

export { Card };
