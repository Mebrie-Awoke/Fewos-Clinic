import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { COLORS } from '../constants/Colors';

const TestimonialCard = ({ item }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.quote}>“{item.quote}”</Text>
      <Text style={styles.name}>{item.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.card,
    borderRadius: 18,
    padding: 16,
    minWidth: 220,
    marginRight: 12,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  quote: {
    color: COLORS.text,
    fontSize: 14,
    lineHeight: 22,
    marginBottom: 10,
  },
  name: {
    color: COLORS.primary,
    fontWeight: '700',
  },
});

export default React.memo(TestimonialCard);
