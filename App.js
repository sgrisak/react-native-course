import { StyleSheet, Text, View, Button, TextInput, ScrollView } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState('');
  const [courseGoals, setCourseGoals] = useState([])

  function goalInputHandler(enteredText) {
    // by doing something as simple as: console.log(enteredText), we could see the output 
    // of each keystroke in the console of VSC. We will save the state of the input here
    // so we can pass it to the next function, addGoalHandler
    setEnteredGoalText(enteredText)
  };

  function addGoalHandler() {
    setCourseGoals(currentCourseGoals => [...currentCourseGoals, enteredGoalText]);
  };

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        {/* onChangeText is a prop that will watch for text changes and then fire off the goalInputHandler 
        function. It will then provide us with the enteredText and pass it to the function. */}
        <TextInput style={styles.textInput} placeholder='Your course goal!' onChangeText={goalInputHandler}/>
        <Button title='Add goal' onPress={addGoalHandler}/>
      </View>
      <View style={styles.goalsContainer}>
      <ScrollView alwaysBounceVertical={false}>
        <Text style={styles.goalSectionTitle}>Your Goals:</Text>
        {courseGoals.map((goal) => <Text key={goal} style={styles.goalItem}>{goal}</Text>)}
      </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingHorizontal: 16,
    flexDirection: 'column',
    color: 'white',
    backgroundColor: 'white',
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    width: '70%',
    marginRight: 8,
    padding: 8
  },
  goalsContainer: {
    flex: 4,
  },
  goalSectionTitle: {
    fontSize:16,
    color: '#333',
    backgroundColor:'#ccc',
    padding: 8,
    textAlign: 'center',
    marginBottom: 18
  },
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
    color: 'white'
  }
});
