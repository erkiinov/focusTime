import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { colors } from "../utils/colors";
import { TextInput } from "react-native-paper";
import { RoundedButton } from "../components/Button";
import { fontSizes, spacing } from "../utils/sizes";

export const Focus = ({ addSubject }) => {
  const [subject, setSubject] = useState("");
  return (
    <View style={styles.container}>
      <View style={styles.containerInput}>
        <TextInput
          textColor={colors.white}
          style={styles.input}
          label="What whould you like to focus on?"
          onChangeText={setSubject}
        />
        <RoundedButton
          size={60}
          textStyle={styles.text}
          style={styles.button}
          title="+"
          onPress={() => addSubject(subject)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    color: colors.white,
    fontSize: fontSizes.lg,
  },
  input: {
    width: "80%",
    // borderRadius: 10,
    backgroundColor: "transparent",
  },
  containerInput: {
    paddingTop: spacing.xxl,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 0,
    borderRadius: 60,
    fontSize: "40px",
  },
});
