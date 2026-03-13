import { IsEmptyComponent } from "@/src/components/state-components/empty";
import { IsLoadingComponent } from "@/src/components/state-components/loading";
import { Button } from "@/src/components/ui/button";
import { Card } from "@/src/components/ui/card";
import { Header } from "@/src/components/ui/header";
import { Container, Screen } from "@/src/components/ui/screen";
import { useWorkOrdersStore } from "@/src/store/workOrderStore";
import React, { useEffect } from "react";
import { FlatList, StyleSheet, View } from "react-native";

export default function Index() {
  const { loadWorkOrders, workOrders, isLoading } = useWorkOrdersStore();

  useEffect(() => {
    loadWorkOrders();
  }, [loadWorkOrders]);

  if (isLoading) {
    return <IsLoadingComponent />;
  }

  if (!workOrders) {
    return (
      <IsEmptyComponent
        title="Não foi possível carregar"
        subtitle="Tente novamente em alguns instantes"
        action={loadWorkOrders}
      />
    );
  }

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
          data={workOrders}
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
