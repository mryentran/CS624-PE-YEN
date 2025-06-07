import { useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { colors } from '../theme';

export default function Country({ route }) {
  const { country } = route.params;
  const [currencies, setCurrencies] = useState(country.currencies || []);
  const [currencyName, setCurrencyName] = useState('');
  const [currencyInfo, setCurrencyInfo] = useState('');

  const addCurrency = () => {
    if (!currencyName.trim() || !currencyInfo.trim()) return;

    const newCurrency = { name: currencyName.trim(), info: currencyInfo.trim() };
    const updatedCurrencies = [...currencies, newCurrency];

    setCurrencies(updatedCurrencies);
    setCurrencyName('');
    setCurrencyInfo('');

    // Optionally update the country object (in memory only, unless lifted to state)
    country.currencies = updatedCurrencies;
  };

  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={styles.listContainer}>
        {currencies.map((item, index) => (
          <View key={index} style={styles.currencyItem}>
            <Text style={styles.currencyTitle}>{item.name}</Text>
            <Text style={styles.currencySubtitle}>{item.info}</Text>
          </View>
        ))}
      </ScrollView>

      <View style={styles.formContainer}>
        <TextInput
          placeholder="Currency name"
          placeholderTextColor="white"
          style={styles.input}
          value={currencyName}
          onChangeText={setCurrencyName}
        />
        <TextInput
          placeholder="Currency info"
          placeholderTextColor="white"
          style={styles.input}
          value={currencyInfo}
          onChangeText={setCurrencyInfo}
        />
        <TouchableOpacity onPress={addCurrency} style={styles.button}>
          <Text style={styles.buttonText}>Add Currency</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    padding: 10,
  },
  currencyItem: {
    borderBottomWidth: 1,
    borderBottomColor: colors.primary,
    paddingVertical: 10,
  },
  currencyTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  currencySubtitle: {
    color: 'rgba(0, 0, 0, 0.5)',
  },
  formContainer: {
    backgroundColor: colors.primary,
    padding: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: 'white',
    color: 'white',
    marginBottom: 10,
    padding: 10,
    borderRadius: 4,
  },
  button: {
    backgroundColor: 'white',
    paddingVertical: 12,
    borderRadius: 4,
    alignItems: 'center',
  },
  buttonText: {
    color: colors.primary,
    fontWeight: 'bold',
  },
});
