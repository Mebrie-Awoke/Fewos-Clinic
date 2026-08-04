import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { COLORS } from '../constants/Colors';

const SectionTitle = ({ title, subtitle }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  title: {
    color: COLORS.text,
    fontSize: 20,
    fontWeight: '700',
  },
  subtitle: {
    color: COLORS.secondaryText,
    fontSize: 13,
    marginTop: 4,
    lineHeight: 20,
  },
});

export default React.memo(SectionTitle);
