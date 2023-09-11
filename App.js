import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import React, { useState } from 'react';

export default function App() {
  // State variables age, lower limit and upper limit
  const [age, setAge] = useState('');
  const [lowerLimit, setLowerLimit] = useState('');
  const [upperLimit, setUpperLimit] = useState('');


  // Function for calculating heart rate zones
  function calculateHeartRateLimits(age) {
    const lowerLimit = Math.round((220 - age) * 0.65);
    const upperLimit = Math.round((220 - age) * 0.85);
    return { lowerLimit, upperLimit };
  }

  // A function to update the user interface based on age
  function updateUI(text) {
    const newAge = parseInt(text);
    if (!isNaN(newAge)) {
      const { lowerLimit, upperLimit } = calculateHeartRateLimits(newAge);
      setAge(newAge.toString());
      setLowerLimit(lowerLimit.toString());
      setUpperLimit(upperLimit.toString());
    } else {
      // Clear state variables if input is not a valid number
      setAge('');
      setLowerLimit('');
      setUpperLimit('');
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Heart Rate Limits Calculator</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Age"
        keyboardType="numeric"
        onChangeText={(text) => updateUI(text)}
        value={age}
      />
      <Text style={styles.result}>Lower Limit: {lowerLimit}</Text>
      <Text style={styles.result}>Upper Limit: {upperLimit}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

// Defining styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',  // left edge
    paddingTop: 80, // distance from top edge
    },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  result: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 5,
  },
});
