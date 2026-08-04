import React from 'react';
import { Image } from 'expo-image';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { COLORS } from '../constants/Colors';

const GalleryCard = ({ item, onPress }) => {
  return (
    <Pressable style={styles.card} onPress={onPress} accessibilityRole="imagebutton" accessible>
      <Image source={{ uri: item.image }} style={styles.image} contentFit="cover" />
      <View style={styles.overlay}>
        <Text style={styles.title}>{item.title}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 180,
    height: 220,
    borderRadius: 20,
    overflow: 'hidden',
    marginRight: 12,
    backgroundColor: COLORS.card,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    padding: 14,
    backgroundColor: 'rgba(15, 139, 141, 0.3)',
  },
  title: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },
});

export default React.memo(GalleryCard);
