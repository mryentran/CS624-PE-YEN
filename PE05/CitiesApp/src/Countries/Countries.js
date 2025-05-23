import React from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback, ScrollView } from 'react-native';
import CenterMessage from '../components/CenterMessage';
import { colors } from '../theme';

export default class Countries extends React.Component {
  static navigationOptions = {
    title: 'Countries',
    headerTitleStyle: {
      color: 'white',
      fontSize: 20,
      fontWeight: '400',
    },
  };

  navigate = (item) => {
    this.props.navigation.navigate('country', {
      country: item,
      Countries: this.props.Countries,
      addLocation: this.props.addLocation,
    });
  };

  render() {
    const { Countries } = this.props;
    return (
      <ScrollView contentContainerStyle={[!Countries.length && { flex: 1 }]}>
        <View style={[!Countries.length && { justifyContent: 'center', flex: 1 }]}>
          {!Countries.length && <CenterMessage message="No saved Countries!" />}
          {Countries.map((item, index) => (
            <TouchableWithoutFeedback onPress={() => this.navigate(item)} key={index}>
              <View style={styles.countryContainer}>
                <Text style={styles.country}>{item.country}</Text>
                <Text style={styles.Currency}>{item.Currency}</Text>
              </View>
            </TouchableWithoutFeedback>
          ))}
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  countryContainer: {
    padding: 10,
    borderBottomWidth: 2,
    borderBottomColor: colors.primary,
  },
  country: {
    fontSize: 20,
  },
  Currency: {
    color: 'rgba(0, 0, 0, .5)',
  },
});