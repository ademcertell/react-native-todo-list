import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

import moment from "moment";

interface DateViewProps {}

interface DateViewState {
  day: string;
  date: string;
  month: string;
}

export default class DateView extends Component<DateViewProps, DateViewState> {
  constructor(props: DateViewProps) {
    super(props);
    this.state = {
      day: moment().format("ddd"),
      date: moment().format("D"),
      month: moment().format("MMMM"),
    };
  }

  render() {
    const { day, date, month } = this.state;

    return (
      <View style={styles.container}>
        <Text style={styles.day}>{day.toUpperCase()}</Text>
        <Text style={styles.date}>{date}</Text>
        <Text style={styles.month}>{month.toUpperCase()}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    marginRight: 20,
  },
  day: {
    color: "black",
    fontSize: 10,
    fontWeight: "400",
  },
  date: {
    color: "black",
    fontSize: 30,
    fontWeight: "600",
  },
  month: {
    color: "black",
    fontSize: 8,
    fontWeight: "400",
  },
});
