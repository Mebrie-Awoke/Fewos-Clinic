import React, { useMemo } from 'react';
import { Tabs } from 'expo-router';
import Icon from 'react-native-vector-icons/Ionicons';
import { COLORS } from '../../src/constants/Colors';

export default function TabsLayout() {
  const tabBarStyle = useMemo(() => ({
    backgroundColor: COLORS.card,
    borderTopColor: COLORS.border,
    height: 72,
    paddingBottom: 10,
    paddingTop: 8,
  }), []);  
  return (
    <Tabs
      screenOptions={({ route }) => ({
        headerShown: false, 
        tabBarActiveTintColor: COLORS.primary,
        tabBarInactiveTintColor: COLORS.secondaryText,
        tabBarStyle,  
        tabBarLabelStyle: { fontSize: 12, fontWeight: '700' },
        tabBarIcon: ({ color, size, focused }) => {
          let iconName = 'home-outline';
          if (route.name === 'home') iconName = focused ? 'home' : 'home-outline';
          else if (route.name === 'services') iconName = focused ? 'medkit' : 'medkit-outline';
          else if (route.name === 'portfolio') iconName = focused ? 'images' : 'images-outline';
          else if (route.name === 'contact') iconName = focused ? 'call' : 'call-outline';
          return <Icon name={iconName} size={size} color={color} />;
        },  
      })}
    />  
  ); 
}
