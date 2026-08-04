import React from 'react';
import { Image } from 'expo-image';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { COLORS } from '../constants/Colors';
import Icon from 'react-native-vector-icons/Ionicons';

const ServiceCard = ({ item, onPress }) => {
  return (
    <Pressable style={styles.card} onPress={onPress} accessibilityRole="button" accessible>
      <Image source={{ uri: item.image }} style={styles.image} contentFit="cover" />
      <View style={styles.content}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
        <View style={styles.footer}>
          <Text style={styles.link}>Learn More</Text>
          <Icon name="arrow-forward" size={16} color={COLORS.primary} />
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.card,
    borderRadius: 20,
    overflow: 'hidden',
    marginBottom: 14,
    shadowColor: '#0f172a',
    shadowOpacity: 0.06,
    shadowRadius: 16,
    shadowOffset: { width: 0, height: 6 },
    elevation: 3,
  },
  image: {
    width: '100%',
    height: 154,
  },
  content: {
    padding: 16,
  },
  title: {
    fontSize: 17,
    fontWeight: '700',
    color: COLORS.text,
    marginBottom: 6,
  },
  description: {
    color: COLORS.secondaryText,
    lineHeight: 20,
    marginBottom: 12,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  link: {
    color: COLORS.primary,
    fontWeight: '700',
  },
});

export default React.memo(ServiceCard);
