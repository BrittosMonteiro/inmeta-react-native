import { Card } from "@/src/components/ui/card";
import { Header } from "@/src/components/ui/header";
import { Screen } from "@/src/components/ui/screen";
import { WorkOrderCard } from "@/src/domain/dtos/work-order";
import React from "react";
import { FlatList, StyleSheet, View } from "react-native";

const DATA: WorkOrderCard[] = Array.from({ length: 20 }).map((_, i) => ({
  id: String(i + 1),
  title: `Item ${i + 1}`,
  description: `Description ${i + 1}`,
  status: i % 2 ? "Completed" : "In Progress",
  assignedTo: "Lucas Brittos",
}));

export default function Index() {
  return (
    <Screen>
      <Header title="Ordens de serviço" />
      <FlatList
        data={DATA}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Card order={item} />}
        contentContainerStyle={styles.listContent}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  listContent: { padding: 12 },
  separator: { height: 10 },
});
