import React, { useMemo, useState } from 'react';
import { Alert, FlatList, Modal, Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Image } from 'expo-image';
import Animated, { FadeInUp } from 'react-native-reanimated';
import { COLORS } from '../../src/constants/Colors';
import { portfolioItems } from '../../src/constants/DummyData';
import SectionTitle from '../../src/components/SectionTitle';
import GalleryCard from '../../src/components/GalleryCard';

export default function PortfolioScreen() {
  const [selectedItem, setSelectedItem] = useState(null);
  const items = useMemo(() => portfolioItems, []);

  return (
    <SafeAreaView style={styles.safeArea} edges={['top', 'bottom']}>
      <View style={styles.container}>
        <SectionTitle title="Portfolio" subtitle="A visual reflection of experience, trust, and community-centered care." />
        <FlatList
          data={items}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item, index }) => (
            <Animated.View entering={FadeInUp.delay(index * 80).duration(500)}>
              <GalleryCard item={item} onPress={() => setSelectedItem(item)} />
            </Animated.View>
          )}
          contentContainerStyle={styles.galleryList}
        />
        <View style={styles.grid}>
          {items.map((item, index) => (
            <Animated.View key={item.id} entering={FadeInUp.delay(index * 90).duration(500)} style={styles.gridItem}>
              <Pressable style={styles.gridButton} onPress={() => setSelectedItem(item)} accessibilityRole="button" accessible>
                <Image source={{ uri: item.image }} style={styles.gridImage} contentFit="cover" />
                <Text style={styles.gridTitle}>{item.title}</Text>
              </Pressable>
            </Animated.View>
          ))}
        </View>
      </View>  
      <Modal visible={Boolean(selectedItem)} transparent animationType="fade" onRequestClose={() => setSelectedItem(null)}>
        <Pressable style={styles.modalOverlay} onPress={() => setSelectedItem(null)}>
          <View style={styles.modalCard}>
            <Image source={{ uri: selectedItem?.image }} style={styles.modalImage} contentFit="cover" />
            <Text style={styles.modalTitle}>{selectedItem?.title}</Text>
            <Text style={styles.modalText}>{selectedItem?.type}</Text>
          </View>
        </Pressable>
      </Modal>
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
  galleryList: {
    paddingVertical: 8,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  gridItem: {
    width: '48%',
    marginBottom: 12,
  },
  gridButton: {
    borderRadius: 18,
    overflow: 'hidden',
    backgroundColor: COLORS.card,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  gridImage: {
    width: '100%',
    height: 120,
  },
  gridTitle: {
    padding: 10,
    color: COLORS.text,
    fontWeight: '700',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(15, 23, 42, 0.6)',
    justifyContent: 'center',
    padding: 18,
  },
  modalCard: {
    backgroundColor: COLORS.card,
    borderRadius: 24,
    overflow: 'hidden',
  },
  modalImage: {
    width: '100%',
    height: 260,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: '800',
    color: COLORS.text,
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  modalText: {
    color: COLORS.secondaryText,
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
});
