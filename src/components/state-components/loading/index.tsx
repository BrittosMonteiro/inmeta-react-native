import { useEffect, useRef } from "react";
import { Animated } from "react-native";
import { Header } from "../../ui/header";
import { Icon } from "../../ui/icon";
import { Container, Screen } from "../../ui/screen";

function IsLoadingComponent() {
  const rotateAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(rotateAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
    ).start();
  }, [rotateAnim]);

  const rotate = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  return (
    <Screen>
      <Header title="Ordens de serviço" />
      <Container
        style={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Animated.View style={{ transform: [{ rotate }] }}>
          <Icon name="CircleNotchIcon" size={32} />
        </Animated.View>
      </Container>
    </Screen>
  );
}
export { IsLoadingComponent };
