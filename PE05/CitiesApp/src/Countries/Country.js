import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../theme';

class Country extends React.Component {
  render() {
    // Expecting country object with name and currency in route params
    const { Country } = this.props.route.params;
    return (
      <View style={styles.container}>
        <Text style={styles.name}>{Country.name}</Text>
        <Text style={styles.currency}>Currency: {Country.currency}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  name: {
    fontSize: 32,
    fontWeight: 'bold',
    color: colors.primary,
    marginBottom: 16,
  },
  currency: {
    fontSize: 20,
    color: '#333',
  },
});

export default Country;