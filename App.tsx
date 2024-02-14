import React from 'react';

// Import necessary modules
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, useColorScheme, View } from 'react-native';
import { Header } from 'react-native/Libraries/NewAppScreen';

function App() {

  return (
    <SafeAreaView>
      <View style={styles.Wrapper}>
        <Header />
      </View>
      <View>
        <Text style={styles.highlight}>
          Started:  Tue Feb 13th 2024
        </Text>
        <Text style={styles.highlight2}>
          {/* *** Edited: {new Date().toLocaleString()} */}
          Edited: {new Date().toLocaleString('en-US', { weekday: 'long', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' })}

        </Text>
      </View>
    </SafeAreaView>
  );

}


const styles = StyleSheet.create({

  highlight: {
    fontWeight: '500',
    fontSize: 16,
    color: '#EDE7F6', // light purple 50
    backgroundColor: '#004D40', // teal 900
  },
  highlight2: {
    fontWeight: '500',
    fontSize: 16,
    color: '#B71C1C', // red 900
    backgroundColor: '#FFF176', // light yellow 200  
  },
  /* Wrapper */
  Wrapper: {
    width: 555,
    height: 222,
    padding: 5,
    flexDirection: 'row',
    backgroundColor: '#5E35B1', // deep purple 700
    marginBottom: 10,
  },
});

export default App;
