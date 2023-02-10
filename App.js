import { useState } from "react";
import {
  StyleSheet,
  View,
  FlatList,
  Button,
  Text,
  Image,
  ImageBackground,
} from "react-native";
import { StatusBar } from "expo-status-bar";

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
import { BackgroundImage } from "react-native-elements/dist/config";

export default function App() {
  const [goalsList, setGoalsList] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function startAddGoalHandler() {
    setModalIsVisible(true);
  }

  function endAddGoalHandler() {
    setModalIsVisible(false);
  }

  function addGoalHandler(enteredGoalText) {
    setGoalsList((currentGoals) => [
      ...goalsList,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
    endAddGoalHandler();
  }

  function deleteGoalHandler(id) {
    setGoalsList((currentGoals) => {
      return currentGoals.filter((goal) => goal.id !== id);
    });
  }

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        {/* <View style={styles.imageContainer}> */}
          {/* <Image
            style={styles.image}
            source={require("./assets/images/stairs.png")}
          /> */}
        {/* </View> */}
        <GoalInput
          visible={modalIsVisible}
          onAddGoal={addGoalHandler}
          onCancel={endAddGoalHandler}
        />
        {goalsList.length > 0 ? (
          <View style={styles.cardContainer}>
            <View style={styles.goalsContainer}>
              <FlatList
                data={goalsList}
                renderItem={(itemData) => {
                  return (
                    <GoalItem
                      text={itemData.item.text}
                      id={itemData.item.id}
                      onDeleteItem={deleteGoalHandler}
                    />
                  );
                }}
                keyExtractor={(item, index) => {
                  return item.id;
                }}
                alwaysBounceVertical={false}
              />
            </View>
          </View>
        ) : (
          <View style={styles.cardContainerNoText}>
            <Text style={styles.noGoalsText}>Start Adding Some Goals!</Text>
            <Image
              style={styles.image}
              source={require("./assets/images/idea.png")}
            />
          </View>
        )}
        <View style={{ flex: 1 }}>
          <Button
            title="Add Goal"
            color="#a065ec"
            onPress={startAddGoalHandler}
            borderRadius={20}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    flexDirection: "column",
    justifyContent: "flex-end",
  },
  goalsContainer: {
    flex: 5,
  },
  cardContainer: {
    shadowColor: "black",
    shadowOpacity: 0,
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 0,
    elevation: 0,
    borderRadius: 20,
    backgroundColor: "white",
    flex: 3,
    margin: 20,
  },
  cardContainerNoText: {
    shadowColor: "black",
    shadowOpacity: 0,
    shadowOffset: { width: 0, height: 20 },
    shadowRadius: 20,
    elevation: 1,
    borderRadius: 20,
    backgroundColor: "white",
    flex: 1,
    margin: 20,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  noGoalsText: {
    fontSize: 35,
    color: "black",
    borderRadius: 20,
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
  },
  imageContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
});
