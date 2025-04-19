import { ScrollView, Text, View, TextInput, StyleSheet, Image } from "react-native";
//In this app, I will build an app to show all the requirement course for MSCS program and try to practice core components
export default function HomeScreen() { //create a fuction to show the app's content
  return (
    <ScrollView style={{backgroundColor:'pink'}}> {/*add ScrollView to enable scrolling the screen */}
      <Image
      source={require('../../assets/icon.png')} 
      style={styles.icon}/>
      
      <View style={{ marginLeft: 20 }}> {/*move the screen a little bit lift left to show it better on the mobile app*/}
        <Text style={styles.header}> 
          Which course you like?
        </Text>
        <TextInput 
          style={styles.textbox}
          placeholder="enter your favorite course here"
          />
        
        <Text style={styles.header}> 
            Core Requirement (24 Credits)
        </Text>
        <View style={styles.container}> {/*add the courses names */}
          <Text>CS 504 Software Engineering (3)</Text>
          <Text>CS 506 Programming for Computing (3)</Text>
          <Text>CS 519 Cloud Computing Overview (3)</Text>
          <Text> CS 533 Computer Architecture (3)</Text>
          <Text>CS 547 Secure Systems and Programs (3)</Text>
          <Text>CS 622 Discrete Math and Algorithms for Computing (3)</Text>
          <Text>DS 510 Artificial Intelligence for Data Science (3)</Text> 
          <Text>DS 620 Machine Learning & Deep Learning (3)</Text>   
        </View>
        <Text style={styles.header}>
          Depth of Study (6 Credits)
        </Text>
        <View style={styles.container}>
          <Text> {/*add the courses names */}
            CS 624 Full-Stack Development - Mobile App (3)
          </Text>
          <Text>CS 628 Full-Stack Development - Web Application (3)</Text>
        </View>
      </View>
      
    </ScrollView>
  )
}
const styles=StyleSheet.create({ //creating design for each content or field
  icon: {
    resizeMode: "contain",
    alignSelf: 'center',
    marginBottom: 20
  },
  container: {
      marginBottom: 20,
    },
    textbox: {
      borderColor: "gray",
      height: 50,
      borderWidth:1,
      backgroundColor: 'rgba(66, 189, 255, 0.31)',
      fontSize:15,
      marginBottom: 20,
      textAlign: 'center'
      },
    header:{
      fontSize: 40,
      marginBottom: 20,
      backgroundColor: "#f3ed11",
      fontWeight: "bold"
    }
})