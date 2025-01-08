import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Text>Another piece of text!</Text>
        </View>
      <Text style={{margin: 16, borderWidth: 4, padding: 8, borderRadius: 10, borderColor: 'red'}}>Hello world!!</Text>
      <Button title="Push me!"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
