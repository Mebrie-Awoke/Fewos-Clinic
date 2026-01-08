import React, { useEffect, useState } from 'react';
import { Alert, Dimensions, FlatList, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Image } from 'expo-image';
import Animated, { FadeInUp, useSharedValue, withTiming } from 'react-native-reanimated';
import { useRouter } from 'expo-router';
import Icon from 'react-native-vector-icons/Ionicons';
import { COLORS } from '../../src/constants/Colors';
import { profile, testimonials } from '../../src/constants/DummyData';
import ProfileCard from '../../src/components/ProfileCard';
import TestimonialCard from '../../src/components/TestimonialCard';
import SectionTitle from '../../src/components/SectionTitle';
import PrimaryButton from '../../src/components/PrimaryButton';
import Loading from '../../src/components/Loading';

const { width } = Dimensions.get('window');

export default function HomeScreen() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const fade = useSharedValue(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      fade.value = withTiming(1, { duration: 700 });
    }, 600);
    return () => clearTimeout(timer);
  }, [fade]);

  if (loading) {
    return <Loading />;
  }

  return (
    <SafeAreaView style={styles.safeArea} edges={['top', 'bottom']}>
      <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
        <Animated.View entering={FadeInUp.duration(600)} style={styles.heroCard}>
          <ProfileCard profile={profile} onPress={() => router.push('/(tabs)/portfolio')} />
        </Animated.View>

        <Animated.View entering={FadeInUp.duration(700)} style={styles.locationCard}>
          <View style={styles.locationHeader}>
            <View>
              <Text style={styles.locationTitle}>Clinic Location</Text>
              <Text style={styles.locationText}>Mertulemariam, Amhara, Ethiopia</Text>
            </View>
            <View style={styles.mapBadge}>
              <Icon name="location" size={18} color={COLORS.primary} />
            </View>
          </View>
          <Image source={require('../../src/assets/images/Getnet.jpg')} style={styles.mapImage} contentFit="cover" />
          <PrimaryButton title="Book Appointment" onPress={() => router.push('/(tabs)/contact')} style={styles.button} />
        </Animated.View>

        <Animated.View entering={FadeInUp.duration(800)} style={styles.section}>
          <SectionTitle title="What patients say" subtitle="Trusted, calming, and highly personalized care." />
          <FlatList 
            horizontal
            data={testimonials} 
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <TestimonialCard item={item} />}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.testimonials}
            ItemSeparatorComponent={() => <View style={{ width: 12 }} />}
          />
        </Animated.View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  container: {
    padding: 18,
    paddingBottom: 32,
  },
  heroCard: {
    marginBottom: 16,
  },
  locationCard: {
    backgroundColor: COLORS.card,
    borderRadius: 24,
    padding: 16,
    marginBottom: 20,
    shadowColor: '#0f172a',
    shadowOpacity: 0.07,
    shadowRadius: 18,
    shadowOffset: { width: 0, height: 8 },
    elevation: 3,
  },
  locationHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  locationTitle: {
    fontWeight: '800',
    color: COLORS.text,
    fontSize: 16,
  },
  locationText: {
    color: COLORS.secondaryText,
    marginTop: 4,
  },
  mapBadge: {
    width: 42,
    height: 42,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.accent,
  },
  mapImage: {
    width: '100%',
    height: 140,
    borderRadius: 16,
    marginBottom: 12,
  },
  button: {
    borderRadius: 16,
  },
  section: {
    marginTop: 4,
  },
  testimonials: {
    paddingVertical: 6,
  },
});
