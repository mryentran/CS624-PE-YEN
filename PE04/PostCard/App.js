
import React, { Component } from 'react';
// PropTypes lets you specify what properties the ProfileCard component can accept.
import PropTypes from 'prop-types'; 
import update from 'immutability-helper'; 
import { Platform, Image, StyleSheet, Text, View, TouchableHighlight, ScrollView, ScrollViewBase } from 'react-native'; 

const userImage = require('./assets/images/user.png');

const data = Array(6).fill({
    image: userImage,
    name: 'John Doe',
    occupation: 'React Native Developer',
    description: 'John is a really great Javascript developer. ' + 'He loves using JS to build React Native applications ' + 'for iOS and Android',
    showThumbnail: false
  }
);

const ProfileCard = (props) => {
  const { image, name, occupation, description, onPress, showThumbnail } = props;
  let containerStyles = [styles.cardContainer];

  if (showThumbnail) {  
    containerStyles.push(styles.cardThumbnail);
  }

  return (
   
    <TouchableHighlight onPress={onPress}> 
      <View style={[containerStyles]}>
        <View style={styles.cardImageContainer}>
          <Image style={styles.cardImage} source={image}/>
        </View>
        <View>
          <Text style={styles.cardName}>
            {name}
          </Text>
        </View>
        <View style={styles.cardOccupationContainer}>
          <Text style={styles.cardOccupation}>
            {occupation}
          </Text>
        </View>
        <View>
          <Text style={styles.cardDescription}>
            {description}
          </Text>
        </View>
      </View>
    </TouchableHighlight>
    
  )
};

ProfileCard.propTypes = {
  image: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  occupation: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  showThumbnail: PropTypes.bool.isRequired,
  onPress: PropTypes.func.isRequired
};

export default class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = { 
      data: data
    }
  }

  handleProfileCardPress = (index) => {
    const showThumbnail = !this.state.data[index].showThumbnail;
    this.setState({
      data: update(this.state.data, {[index]: {showThumbnail: {$set: showThumbnail}}})
    });
  };
  
  render() {
  const rows = []; /*create an empty rows array to hold the rows of cards*/
  const { data } = this.state;

  for (let i = 0; i < data.length; i += 2) { /*now create a loop to loop through all the postcards available in the data array*/
    const rowItems = data.slice(i, i + 2).map((item, index) => { /*slice the data array to get two items and move them to the ProfileCard component*/
      const realIndex = i + index;
      return (
        <ProfileCard
          key={'card-' + realIndex}
          image={item.image}
          name={item.name}
          occupation={item.occupation}
          description={item.description}
          onPress={() => this.handleProfileCardPress(realIndex)}
          showThumbnail={item.showThumbnail}
        />
      );
    });

    rows.push(
      <View key={'row-' + i} style={styles.row}> {/*use unique keys for each row to avoid warnings*/}
        {rowItems}
      </View>
    );
  }

  return <ScrollView><View style={styles.container}>{rows}</View></ScrollView>;
}}

const profileCardColor = 'dodgerblue';

const styles = StyleSheet.create({
    container: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  paddingVertical: 20,
},

    row: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginBottom: 20,
      justifyContent: 'space-between'
      
    },

    
    cardContainer: {
        margin: 20,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: 'black',
        borderWidth: 3,
        borderStyle: 'solid',
        borderRadius: 20,
        backgroundColor: profileCardColor,
        width: 300,
        height: 400,
        ...Platform.select({ 
          ios: {
            shadowColor: 'black',
            shadowOffset: {
              height: 10
            },
            shadowOpacity: 1
          },
          android: {
            elevation: 15
          }
        })
    },
    /*
      Adds a drop shadow to the circular image container
    */
    cardImageContainer: {
        alignItems: 'center',
        backgroundColor: 'white',
        borderWidth: 3,
        borderColor: 'black',
        width: 120,
        height: 120,
        borderRadius: 60,
        marginTop: 30,
        paddingTop: 15,
        ...Platform.select({ 
          ios: {
            shadowColor: 'black',
            shadowOffset: {
              height: 10,
            },
            shadowOpacity: 1
          },
          android: {
            borderWidth: 3,
            borderColor: 'black',
            elevation: 15
          }
        })
    },
    cardImage: {
        width: 80,
        height: 80
    },
    
    cardName: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 24,
        marginTop: 30,
        textShadowColor: 'black',
        textShadowOffset: {
            height: 5,
            width: 5
        },
        textShadowRadius: 3 
    },
    cardOccupationContainer: {
        borderColor: 'black',
        borderBottomWidth: 3
    },
    cardOccupation: {
        fontWeight: 'bold', 
        marginTop: 10,
        marginBottom: 10,
    },
    cardDescription: {
        fontStyle: 'italic', 
        marginTop: 10,
        marginRight: 40,
        marginLeft: 40,
        marginBottom: 10
    },
    /*
        The cardThumbnail style reduces the component’s size by 80%.
    */
        cardThumbnail: {
          transform: [{scale: 0.2}]
      },
});