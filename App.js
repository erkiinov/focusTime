import { StatusBar as StatusBarExpo } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Platform,
  SafeAreaView,
  StatusBar,
} from "react-native";
import { colors } from "./src/utils/colors";
import { Focus } from "./src/features/Focus";
import { useState } from "react";
import { Timer } from "./src/features/Timer";

export default function App() {
  const [currentSubject, setCurrentSubject] = useState(null);
  return (
    <SafeAreaView style={styles.container}>
      {!currentSubject ? (
        <Focus addSubject={setCurrentSubject} />
      ) : (
        <Timer
          focusSubject={currentSubject}
          onTimerEnd={() => {}}
          clearSubject={() => {
            setCurrentSubject(null);
          }}
        />
      )}

      {currentSubject && (
        <Text onPress={() => setCurrentSubject("")}>Cle545123545145ar</Text>
      )}
      <StatusBarExpo style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    paddingHorizontal: 20,
    backgroundColor: colors.darkBlue,
  },
});
