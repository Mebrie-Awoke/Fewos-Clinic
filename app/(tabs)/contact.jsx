import React, { useMemo, useState } from 'react';
import { Alert, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useForm, Controller } from 'react-hook-form';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { COLORS } from '../../src/constants/Colors';
import InputField from '../../src/components/InputField';
import PrimaryButton from '../../src/components/PrimaryButton';
import ContactCard from '../../src/components/ContactCard';
import SectionTitle from '../../src/components/SectionTitle';
import { submitAppointment } from '../../src/services/api';

export default function ContactScreen() {
  const [submitting, setSubmitting] = useState(false);
  const { control, handleSubmit, reset, formState: { errors } } = useForm({
    defaultValues: {
      fullName: '',
      phone: '',
      reason: '',
      date: '',
      time: '',
    },
  });

  const onSubmit = async (data) => {
    setSubmitting(true);
    try {
      const response = await submitAppointment(data);
      if (response?.error) {
        throw new Error(response.message || 'Unable to book appointment');
      }
      await AsyncStorage.setItem('last_appointment', JSON.stringify(data));
      Alert.alert('Appointment booked', 'Your booking request has been submitted successfully.');
      reset();
    } catch (error) {
      Alert.alert('Booking issue', error.message || 'Please try again later.');
    } finally {
      setSubmitting(false);
    }
  };
  
  const contactDetails = useMemo(() => [
    { icon: 'mail-outline', title: 'Email', value: 'care@northwellclinic.com' },
    { icon: 'call-outline', title: 'Phone', value: '+1 (206) 555-0146' },
    { icon: 'logo-whatsapp', title: 'WhatsApp', value: '+1 (206) 555-0146' },
    { icon: 'location-outline', title: 'Location', value: '2207 4th Avenue, Seattle' },
  ], []); 

  return (
    <SafeAreaView style={styles.safeArea} edges={['top', 'bottom']}>
      <KeyboardAvoidingView style={styles.flex} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
          <SectionTitle title="Book an appointment" subtitle="Share a few details and the team will reach out shortly." />
          <View style={styles.formCard}>
            <Controller
              control={control}
              rules={{ required: 'Full name is required' }}
              render={({ field: { onChange, value } }) => (
                <InputField label="Full Name" value={value} onChangeText={onChange} placeholder="Enter your full name" />
              )}
              name="fullName"
            />
            {errors.fullName ? <Text style={styles.error}>{errors.fullName.message}</Text> : null}

            <Controller
              control={control}
              rules={{ required: 'Phone number is required' }}
              render={({ field: { onChange, value } }) => (
                <InputField label="Phone Number" value={value} onChangeText={onChange} placeholder="Enter phone number" keyboardType="phone-pad" />
              )}
              name="phone"
            />
            {errors.phone ? <Text style={styles.error}>{errors.phone.message}</Text> : null}

            <Controller
              control={control}
              rules={{ required: 'Please share the visit reason' }}
              render={({ field: { onChange, value } }) => (
                <InputField label="Reason for Visit" value={value} onChangeText={onChange} placeholder="Describe your visit" multiline />
              )}
              name="reason"
            />
            {errors.reason ? <Text style={styles.error}>{errors.reason.message}</Text> : null}

            <Controller
              control={control}
              render={({ field: { onChange, value } }) => (
                <InputField label="Preferred Date" value={value} onChangeText={onChange} placeholder="YYYY-MM-DD" />
              )}
              name="date"
            />

            <Controller
              control={control}
              render={({ field: { onChange, value } }) => (
                <InputField label="Preferred Time" value={value} onChangeText={onChange} placeholder="e.g. 10:30 AM" />
              )}
              name="time"
            />

            <PrimaryButton title={submitting ? 'Submitting...' : 'Submit'} onPress={handleSubmit(onSubmit)} style={styles.button} />
          </View>

          <View style={styles.contactSection}>
            {contactDetails.map((item) => (
              <ContactCard key={item.title} icon={item.icon} title={item.title} value={item.value} onPress={() => Alert.alert(item.title, item.value)} />
            ))}
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  flex: {
    flex: 1,
  },
  container: {
    padding: 18,
    paddingBottom: 32,
  },
  formCard: {
    backgroundColor: COLORS.card,
    borderRadius: 24,
    padding: 16,
    shadowColor: '#0f172a',
    shadowOpacity: 0.07,
    shadowRadius: 16,
    shadowOffset: { width: 0, height: 8 },
    elevation: 3,
    marginBottom: 16,
  },
  button: {
    marginTop: 6,
  },
  error: {
    color: '#dc2626',
    fontSize: 12,
    marginTop: -8,
    marginBottom: 8,
  },
  contactSection: {
    marginTop: 4,
  },
});
