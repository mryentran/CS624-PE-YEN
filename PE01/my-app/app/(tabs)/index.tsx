import { StyleSheet, View, Text } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.texts}> {/* adding the content */}
        YEN HAI TRAN
      </Text>
      <Text style={styles.texts}>MASTER OF COMPUTER SCIENCE</Text>
      <Text style={styles.texts}>CITY UNIVERSITY OF SEATTLE</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1, //expand the container to the whole screen
    backgroundColor:"yellow", //pick the color
    alignItems:"center", // move the content to the center of the line
    justifyContent:"center", //move the content into the center of the screen
    
  },
  texts:{
     marginBottom: 20 //add the space between lines
  }
});
