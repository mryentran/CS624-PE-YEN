import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';

const TabItem = ({isActive, text, onPress }) => {
  return(
    <>
        <Pressable style={[styles.button, isActive ? styles.activeButton : null]}  onPress={onPress}>
        <Text style={styles.buttonText}>{text}</Text>
        </Pressable>
    </>
  );
};

const styles = StyleSheet.create({
  button: {
    flex: 1,
    paddingVertical: 18,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  buttonText: {
    color: '#666666',
    fontWeight: '500',
  },
  activeButton: {
    borderColor: '#2196F3',
    backgroundColor: '#ffffff',
    borderBottomWidth: 2,
}});

export default TabItem;
