import React from 'react';
import { Pressable, Text, StyleSheet, View } from 'react-native';
import TabItem from './TabItem'
const Tab = ({ type, setType }) => {
  
  return (
    <View style={styles.tabContainer}>
      <TabItem 
        text="All" 
        isActive={type==="All"}
        onPress={()=>setType("All")}
      />
      <TabItem 
        text="Active" 
        isActive={type==="Active"}
        onPress={()=>setType("Active")}
      />
      <TabItem 
        text="Complete" 
        isActive={type==="Complete"}
        onPress={()=>setType("Complete")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default Tab;
