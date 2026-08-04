import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { COLORS } from '../constants/Colors';

const ContactCard = ({ icon, title, value, onPress }) => {
  return (
    <Pressable style={styles.card} onPress={onPress} accessibilityRole="button" accessible>
      <View style={styles.iconWrap}>
        <Icon name={icon} size={18} color={COLORS.primary} />
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.value}>{value}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.card,
    borderRadius: 16,
    padding: 14,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  iconWrap: {
    width: 42,
    height: 42,
    borderRadius: 12,
    backgroundColor: COLORS.accent,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  content: {
    flex: 1,
  },
  title: {
    color: COLORS.secondaryText,
    fontSize: 12,
    marginBottom: 2,
  },
  value: {
    color: COLORS.text,
    fontWeight: '700',
  },
});

export default React.memo(ContactCard);
