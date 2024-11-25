import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import ProgrammingLanguageCard from '../ProgrammingLanguageCard';

const LanguagesScreen = () => {
  const languages = [
    { name: 'JavaScript', experience: '2 года', logo: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png' },
    { name: 'Python', experience: '1 год', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg' },
    { name: 'Java', experience: '6 месяцев', logo: 'https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg' },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={languages}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <ProgrammingLanguageCard
            name={item.name}
            experience={item.experience}
            logo={item.logo}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#ffffff',
  },
});

export default LanguagesScreen;
