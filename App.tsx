import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  TouchableOpacity,
} from "react-native";

import Task from "./components/Task";
import DateView from "./components/Date";

const App: React.FC = () => {
  const [task, setTask] = useState<string>("");
  const [taskItems, setTaskItems] = useState<string[]>([]);

  const handleAddTask = () => {
    if (task.trim() !== "") {
      setTaskItems([...taskItems, task]);
      setTask("");
    }
  };

  const completedTask = (index: number) => {
    const itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  };

  return (
    <View style={styles.container}>
      <View style={styles.taskWrapper}>
        <View style={styles.dateTitle}>
          <Text style={styles.title}>ToDo Lists</Text>
          <DateView />
        </View>
        <View style={styles.content}>
          {taskItems.map((item, index) => (
            <TouchableOpacity key={index} onPress={() => completedTask(index)}>
              <Task text={item} />
            </TouchableOpacity>
          ))}
          <Task text={"Go shopping"} />
          <Task text={"Look at the plans in the trello"} />
        </View>
      </View>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTask}
      >
        <TextInput
          style={styles.input}
          placeholder={"Write a task"}
          value={task}
          onChangeText={(text) => setTask(text)}
        />
        <TouchableOpacity onPress={handleAddTask}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  taskWrapper: {
    paddingTop: 100,
    paddingHorizontal: 20,
  },
  title: {
    margin: 10,
    fontSize: 24,
    fontWeight: "normal",
  },
  content: {
    marginTop: 30,
  },
  writeTask: {
    position: "absolute",
    bottom: 60,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  input: {
    backgroundColor: "#d9d9d9",
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderRadius: 15,
    width: 268,
    height: 50,
  },
  addWrapper: {
    width: 60,
    height: 60,
    borderRadius: 60,
    backgroundColor: "#d9d9d9",
    justifyContent: "center",
    alignItems: "center",
  },
  addText: {
    fontSize: 30,
    fontWeight: "bold",
  },
  dateTitle: {
    flexDirection: "row",
    justifyContent: "space-between", 
    alignItems: "center",
  }
});

export default App;
