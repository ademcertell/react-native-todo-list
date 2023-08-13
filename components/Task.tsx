import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

interface TaskProps {
  text: string;
}

const Task: React.FC<TaskProps> = (props) => {
  return (
    <View style={styles.item}>
      <View style={styles.itemCheck}>
        <View style={styles.square}></View>
        <Text style={styles.itemText}>{props.text}</Text>
      </View>
      <View style={styles.circular}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#E6E6E6",
    padding: 15,
    margin: 10,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
  itemCheck: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
  square: {
    width: 25,
    height: 25,
    borderRadius: 5,
    backgroundColor: "#31C859",
    opacity: 0.4,
    marginRight: 15,
  },
  itemText: {
    maxWidth: "100%",
  },
  circular: {
    width: 15,
    height: 15,
    borderColor: "#5755D7",
    borderWidth: 2,
    borderRadius: 10,
  },
});

export default Task;
