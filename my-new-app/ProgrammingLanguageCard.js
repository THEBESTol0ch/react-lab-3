import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ProgrammingLanguageCard = ({ name, experience, logo }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.experience}>{experience}</Text>
      <Image source={{ uri: logo }} style={styles.logo} />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#f9f9f9',
    padding: 16,
    marginVertical: 8,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  experience: {
    fontSize: 14,
    marginVertical: 4,
  },
  logo: {
    width: 50,
    height: 50,
    marginTop: 8,
  },
});

export default ProgrammingLanguageCard;
