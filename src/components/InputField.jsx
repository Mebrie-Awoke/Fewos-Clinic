import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { COLORS } from '../constants/Colors';

const InputField = React.forwardRef(({ label, value, onChangeText, placeholder, multiline, keyboardType, ...props }, ref) => {
  return  (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        ref={ref}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={COLORS.secondaryText}
        multiline={multiline}
        keyboardType={keyboardType}
        style={[styles.input, multiline && styles.textArea]}
        {...props}
      />
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    marginBottom: 14,
  },
  label: {
    color: COLORS.text,
    marginBottom: 8,
    fontWeight: '600',
  },
  input: {
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 14,
    paddingHorizontal: 14,
    paddingVertical: 12,
    color: COLORS.text,
    backgroundColor: COLORS.card,
  },
  textArea: {
    minHeight: 96,
    textAlignVertical: 'top',
  },
});

export default React.memo(InputField);
