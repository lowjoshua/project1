import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      <View style={styles.fillerContainer}></View>

      <View style={styles.titleContainer}>

      <Text style={styles.text}>woohoo!!!!</Text>
      <Text style={{ fontStyle: "italic", color: "blue"}}>You got it babe!</Text>

      </View>

      <View style={styles.fillerContainer}></View>

      <StatusBar style="auto" />
    </View>
  );
}

const ViewStyleProps = () => {
  return (
    <View style={styles.container}>
      <View style={styles.top} />
      <View style={styles.middle} />
      <View style={styles.bottom} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#add8e6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'red',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  fillerContainer: {
    padding: 10,
    backgroundColor: "blue",
    flex: 0.25,
    width: "15%",
  },
  titleContainer: {
    backgroundColor: "orange",
    padding: 10,
    margin: 10,
    flex: 0.5,
    justifyContent: "center",
    borderRadius: 20,
    width: "30%",
  },
});
