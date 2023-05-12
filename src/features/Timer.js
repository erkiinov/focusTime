import React, { useState } from "react";
import { StyleSheet, Text, View, Vibration } from "react-native";
import { Countdown } from "../components/CountDown";
import { RoundedButton } from "../components/Button";
import { spacing } from "../utils/sizes";
import { colors } from "../utils/colors";

export const Timer = ({ focusSubject }) => {
  const [isStarted, setIsStarted] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.countdown}>
        <Countdown
          isPaused={!isStarted}
          onProgress={() => {}}
          onEnd={() => {
            Vibration.vibrate();
          }}
        />
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Focusing on: </Text>
          <Text style={styles.task}>{focusSubject}</Text>
        </View>
      </View>

      <View style={styles.buttonWrapper}>
        {!isStarted ? (
          <RoundedButton title="Start" onPress={() => setIsStarted(true)} />
        ) : (
          <RoundedButton title="Stop" onPress={() => setIsStarted(false)} />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  countdown: {
    flex: 0.5,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonWrapper: {
    flex: 0.3,
    flexDirection: "row",
    padding: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: colors.white,
    textAlign: "center",
    fontWeight: "bold",
  },
  task: {
    textAlign: "center",
    color: colors.white,
  },
  titleContainer: {
    paddingTop: spacing.xxl,
  },
});