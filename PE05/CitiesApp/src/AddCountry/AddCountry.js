import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpaCountry } from 'react-native';
import uuid from 'react-native-uuid';
import { colors } from '../theme';

class AddCountry extends React.Component {
  state = {
    Country: '',
    country: '',
  };

  onChangeText = (key, value) => {
    this.setState({ [key]: value });
  };

  submit = () => {
    const { Country, country } = this.state;
    if (Country === '' || country === '') {
      alert('please complete form');
      return;
    }
    const newCountry = {
      Country,
      country,
      id: uuid.v4(),
      locations: [],
    };
    this.props.addCountry(newCountry); 
    this.setState(
      {
        Country: '',
        country: '',
      },
      () => {
        this.props.navigation.navigate('Countries');
      }
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>Countries</Text>
        <TextInput
          placeholder="Country name"
          onChangeText={(val) => this.onChangeText('Country', val)}
          style={styles.input}
          value={this.state.Country}
        />
        <TextInput
          placeholder="Country name"
          onChangeText={(val) => this.onChangeText('country', val)}
          style={styles.input}
          value={this.state.country}
        />
        <TouchableOpaCountry onPress={this.submit}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Add Country</Text>
          </View>
        </TouchableOpaCountry>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    height: 50,
    backgroundColor: '#666',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
  heading: {
    color: 'white',
    fontSize: 40,
    marginBottom: 10,
    alignSelf: 'center',
  },
  container: {
    backgroundColor: colors.primary,
    flex: 1,
    justifyContent: 'center',
  },
  input: {
    margin: 10,
    backgroundColor: 'white',
    paddingHorizontal: 8,
    height: 50,
  },
});

export default AddCountry;