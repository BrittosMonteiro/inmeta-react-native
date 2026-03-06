import { router } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Icon } from "../icon";

type HeaderProps = {
  title: string;
  hasBackButton?: boolean;
};

function Header({ title, hasBackButton }: HeaderProps) {
  return (
    <View style={styles.header}>
      {hasBackButton && (
        <Pressable onPress={() => router.back()}>
          <Icon name="ArrowCircleLeftIcon" />
        </Pressable>
      )}
      <Text style={styles.headerText}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 8,
  },
  headerText: { fontSize: 20, fontWeight: "600" },
});

export { Header };
