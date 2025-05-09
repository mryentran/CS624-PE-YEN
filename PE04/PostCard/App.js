import React, { Component } from 'react';
import { Image, StyleSheet, Text, View} from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.cardContainer}>
          <View style={styles.cardImageContainer}>
            <Image style={styles.cardImage}
              source={require('./assets/images/user.png')}/>
          </View>
          <View>
            <Text style={styles.cardName}>
              Joe Doe
            </Text>
          </View>
          <View style={styles.cardOccupationContainer}>
            <Text style={styles.cardOccupation}>  
              React Native Developer
            </Text>
          </View>
          <View>
            <Text style={styles.cardDescription}>
              John is a really great Java script developer. He love using js to build React Native applications for android and ios.
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

const profileCardColor = 'dodgerblue';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  cardContainer: {
    alignItems: 'center', //new
    borderColor: 'black',
    borderWidth: 3,
    borderStyle: 'solid',
    borderRadius: 20,
    backgroundColor: profileCardColor,
    width: 300,
    height: 400
  },
  cardImageContainer: {
    alignItems: 'center', //new
    backgroundColor: 'white',
    borderWidth: 3,
    borderColor: 'black',
    width: 120,
    height: 120,
    borderRadius: 60,
    marginTop: 30, //new
    paddingTop: 15 //new
  },
  cardImage: {
    width: 80,
    height: 80
  },
  cardName: {
    fontWeight: 'bold',
    color: 'white',
    marginTop: 30,
    textShadowColor: 'black',
    textShadowOffset: {width: 5, height: 5},
  },
  cardOccupationContainer: {
    borderLeftColor: 'black',
    borderBottomWidth: 3,
  }, 
  cardOccupation: {
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
  },
  cardDescription: {
    fontStyle: 'italic',
    marginTop: 10,
    marginBottom: 10,
    marginLeft:40,
    marginRight:40,
  }
});