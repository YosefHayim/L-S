import { TextInput, View, StyleSheet, Alert, Text } from "react-native";

import { useState } from "react";
import { Colors } from "../constants/colors";
import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";

const StartGameScreen: React.FC<{ setUserNumber: React.Dispatch<React.SetStateAction<number | null>> }> = ({ setUserNumber }) => {
  const [enteredNumber, setEnteredNumber] = useState<number | null>(null);

  const confirmInputHandler = () => {
    if ((enteredNumber && isNaN(enteredNumber)) || (enteredNumber && enteredNumber <= 0)) {
      Alert.alert("Invalid number", "number must be between 1 and 99.", [{ text: "okay", style: "destructive", onPress: () => setEnteredNumber(null) }]);
      return;
    }
    setUserNumber(enteredNumber);
  };

  return (
    <View>
      <View>
        <Title titleText="Guess my number" />
        <Text style={styles.guidnessText}>Enter a number between 1 and 99</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.numberInput}
          maxLength={2}
          keyboardType="number-pad"
          autoCapitalize="none"
          autoCorrect={false}
          value={enteredNumber?.toString()}
          onChangeText={(numberProvided) => setEnteredNumber(Number(numberProvided))}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={() => setEnteredNumber(null)}>Reset</PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
          </View>
        </View>
      </View>
    </View>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  guidnessText: { fontSize: 18, color: "white", width: "100%", textAlign: "center", fontWeight: 800 },
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: Colors.primary800,
    borderRadius: 8,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});
