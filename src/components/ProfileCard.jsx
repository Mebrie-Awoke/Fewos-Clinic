import React from 'react';
import { Image } from 'expo-image';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { COLORS } from '../constants/Colors';
import Icon from 'react-native-vector-icons/Ionicons';

const ProfileCard = ({ profile, onPress }) => {
  return (
    <View style={styles.card}>
      <View style={styles.imageWrap}>
        <Image source={typeof profile.image === 'string' ? { uri: profile.image } : profile.image} style={styles.image} contentFit="cover" />
        <View style={styles.badge}>
          <Icon name="checkmark-circle" size={18} color={COLORS.primary} />
        </View>
      </View>
      <View style={styles.info}>
        <Text style={styles.name}>{profile.name}</Text>
        <Text style={styles.title}>{profile.title}</Text>
        <Text style={styles.bio}>{profile.bio}</Text>
        <Pressable style={styles.button} onPress={onPress} accessibilityRole="button" accessible>
          <Text style={styles.buttonText}>View Certificates</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.card,
    borderRadius: 24,
    padding: 18,
    shadowColor: '#0f172a',
    shadowOpacity: 0.08,
    shadowRadius: 20,
    shadowOffset: { width: 0, height: 8 },
    elevation: 4,
  },
  imageWrap: {
    position: 'relative',
    marginBottom: 16,
  },
  image: {
    width: '100%',
    height: 220,
    borderRadius: 20,
  },
  badge: {
    position: 'absolute',
    right: 12,
    top: 12,
    backgroundColor: COLORS.card,
    borderRadius: 999,
    padding: 6,
  },
  info: {
    gap: 6,
  },
  name: {
    fontSize: 22,
    fontWeight: '800',
    color: COLORS.text,
  },
  title: {
    color: COLORS.primary,
    fontWeight: '700',
  },
  bio: {
    color: COLORS.secondaryText,
    lineHeight: 20,
  },
  button: {
    marginTop: 8,
    alignSelf: 'flex-start',
    backgroundColor: COLORS.accent,
    borderRadius: 999,
    paddingHorizontal: 14,
    paddingVertical: 10,
  },
  buttonText: {
    color: COLORS.primary,
    fontWeight: '700',
  },
});

export default React.memo(ProfileCard);
