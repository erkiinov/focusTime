import React, { useState } from "react";
import { StyleSheet, Text, View, Vibration } from "react-native";
import { ProgressBar } from "react-native-paper";
import { Countdown } from "../components/CountDown";
import { RoundedButton } from "../components/Button";
import { spacing } from "../utils/sizes";
import { colors } from "../utils/colors";
import { Timing } from "./Timing";

const ONE_SECOND_IN_MS = 1000;

const pattern = [
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
];

export const Timer = ({ focusSubject, clearSubject }) => {
  const [isStarted, setIsStarted] = useState(false);
  const [progress, setProgress] = useState(1);
  const [munutes, setMinutes] = useState(1);
  return (
    <View style={styles.container}>
      <View style={styles.countdown}>
        <Countdown
          minutes={munutes}
          isPaused={!isStarted}
          onProgress={setProgress}
          onEnd={() => {
            Vibration.vibrate(pattern);
          }}
        />
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Focusing on: </Text>
          <Text style={styles.task}>{focusSubject}</Text>
        </View>
      </View>

      <View style={styles.ProgressBar}>
        <ProgressBar
          progress={progress}
          color={colors.progressBar}
          style={{ height: spacing.sm }}
        />
      </View>
      <View style={styles.timingWrapper}>
        <Timing onChangeTime={setMinutes} />
      </View>
      <View style={styles.buttonWrapper}>
        {!isStarted ? (
          <RoundedButton title="Start" onPress={() => setIsStarted(true)} />
        ) : (
          <RoundedButton title="Stop" onPress={() => setIsStarted(false)} />
        )}
      </View>
      <View style={styles.clearWrapper}>
        <RoundedButton size={50} title="-" onPress={clearSubject} />
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
  timingWrapper: {
    flex: 0.1,
    paddingTop: spacing.xxl,
    flexDirection: "row",
  },
  buttonWrapper: {
    flex: 0.3,
    flexDirection: "row",
    padding: 15,
    paddingTop: 50,
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
  ProgressBar: {
    paddingTop: spacing.sm,
    // flex: 0.1,
  },
  clearWrapper: {
    flex: 0.1,
    flexDirection: "row",
    justifyContent: "center",
  },
});
