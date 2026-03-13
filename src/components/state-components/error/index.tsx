import { StyleSheet, Text, View } from "react-native";
import { Button } from "../../ui/button";
import { Icon } from "../../ui/icon";

type IsErrorComponentProps = {
  title: string;
  subtitle?: string;
  action?: () => void;
};

function IsErrorComponent({ title, subtitle, action }: IsErrorComponentProps) {
  return (
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

export { IsErrorComponent };
