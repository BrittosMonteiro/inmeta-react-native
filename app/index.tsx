import { Button } from "@/src/components/ui/button";
import { Card } from "@/src/components/ui/card";
import { Header } from "@/src/components/ui/header";
import { Container, Screen } from "@/src/components/ui/screen";
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
      <Container>
        <Button
          title="Criar nova ordem de serviço"
          iconName="PlusCircleIcon"
          path="/work-order/manage-work-order"
        />
        <FlatList
          data={DATA}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <Card order={item} />}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
        />
      </Container>
    </Screen>
  );
}

const styles = StyleSheet.create({
  separator: { height: 10 },
});
