import { StyleSheet, Text, View } from "react-native";
import { Button } from "../../ui/button";
import { Header } from "../../ui/header";
import { Icon } from "../../ui/icon";
import { Container, Screen } from "../../ui/screen";

type IsErrorComponentProps = {
  title: string;
  subtitle?: string;
  action?: () => void;
};

function IsEmptyComponent({ title, subtitle, action }: IsErrorComponentProps) {
  return (
    <Screen>
      <Header title="Ordens de serviço" />
      <Container
        style={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View style={styles.container}>
          <Icon name="CloudWarningIcon" size={32} />
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 4,
              alignItems: "center",
            }}
          >
            <Text style={styles.title}>{title}</Text>
            {subtitle && (
              <Text style={styles.subtitle}>Tente novamente em instantes</Text>
            )}
          </View>
          {action && (
            <Button
              title="Tentar novamente"
              action={action}
              iconName="ArrowClockwiseIcon"
            />
          )}
        </View>
      </Container>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: 16,
    gap: 16,
  },
  title: { fontSize: 18 },
  subtitle: { fontSize: 14 },
});

export { IsEmptyComponent };
