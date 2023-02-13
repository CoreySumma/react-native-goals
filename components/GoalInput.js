import {
  View,
  Button,
  TextInput,
  StyleSheet,
  Modal,
  Image,
} from "react-native";
import { useState } from "react";

export default function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText("");
  }

  return (
    <>
      <Modal visible={props.visible} animationType="slide">
        <View style={styles.inputContainer}>
          <View style={styles.imageConatiner}>
            <Image
              style={styles.image}
              source={require("../assets/images/pencil.png")}
            />
          </View>
          <TextInput
            style={styles.textInput}
            placeholder="Enter Your Goal Here"
            onChangeText={goalInputHandler}
            value={enteredGoalText}
          />
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button
                title="Set Goal"
                onPress={addGoalHandler}
                color="#b180f0"
              />
            </View>
            <View style={styles.button}>
              <Button title="Bail" onPress={props.onCancel} color="#f31282" />
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    borderRadius: 6,
    backgroundColor: "#e4d0ff",
    color: "120438",
    width: "100%",
    padding: 15,
  },
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 25,
    borderBottomWidth: 1,
    backgroundColor: "#311b6b",
  },
  buttonContainer: {
    marginTop: 25,
    flexDirection: "row",
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
  imageConatiner: {
    width: 200,
    height: 200,
    backgroundColor: "white",
    borderRadius: 100,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
});
