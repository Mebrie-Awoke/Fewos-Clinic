import React, { useMemo, useState } from 'react';
import { Alert, FlatList, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Animated, { FadeInUp } from 'react-native-reanimated';
import { COLORS } from '../../src/constants/Colors';
import { services } from '../../src/constants/DummyData';
import ServiceCard from '../../src/components/ServiceCard';
import SectionTitle from '../../src/components/SectionTitle';

export default function ServicesScreen() {
  const [data] = useState(services);
  const content = useMemo(() => data, [data]);
  return (    
    <SafeAreaView style={styles.safeArea} edges={['top', 'bottom']}>
      <View style={styles.container}>
        <SectionTitle title="Services" subtitle="Flexible care plans designed to meet the needs of every patient." />
        <FlatList
          data={content}
          keyExtractor={(item) => item.id}
          renderItem={({ item, index }) => (
            <Animated.View entering={FadeInUp.delay(index * 80).duration(500)}>
              <ServiceCard item={item} onPress={() => Alert.alert(item.title, item.description)} />
            </Animated.View>
          )}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.list}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  container: {
    flex: 1,
    padding: 18,
  },
  list: {
    paddingBottom: 24,
  },
});
