import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import CenterMessage from '../components/CenterMessage';

export default function Countries({ navigation, countries = [], addLocation }) {
  const navigate = (country) => {
    navigation.navigate('Country', { country });
  };

  return (
    <ScrollView contentContainerStyle={!countries.length && styles.centerContainer}>
      <View style={!countries.length && styles.centered}>
        {!countries.length ? (
          <CenterMessage message="No saved countries!" />
        ) : (
          countries.map((item) => (
            <TouchableOpacity key={item.name} onPress={() => navigate(item)}>
              <View style={styles.countryItem}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.currency}>
                  {item.currencies && item.currencies.length > 0
                    ? item.currencies.map((c) => c.name).join(', ')
                    : 'No currency info'}
                </Text>
              </View>
            </TouchableOpacity>
          ))
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  centerContainer: { flex: 1 },
  centered: { justifyContent: 'center', flex: 1 },
  countryItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderColor: '#1E90FF',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  currency: {
    color: 'gray',
  },
});
