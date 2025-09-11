import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';
import Animated, {
  useAnimatedStyle,
  withTiming,
  Easing,
  SlideInLeft,
} from 'react-native-reanimated';

const CustomDrawerContent = (props) => {
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: withTiming(0, {
            duration: 300,
            easing: Easing.bezier(0.25, 0.1, 0.25, 1),
          }),
        },
      ],
    };
  });

  return (
    <DrawerContentScrollView {...props} style={styles.container}>
      <Animated.View entering={SlideInLeft.duration(500)} style={[styles.header, animatedStyle]}>
        <View style={styles.logoContainer}>
          <Ionicons name="musical-notes" size={40} color="#1DB954" />
        </View>
        <Text style={styles.appName}>Spotify Clone</Text>
        <Text style={styles.userEmail}>john.doe@example.com</Text>
      </Animated.View>

      <View style={styles.drawerItems}>
        <DrawerItemList {...props} />
      </View>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.premiumButton}>
          <Ionicons name="star" size={20} color="#000" />
          <Text style={styles.premiumText}>Go Premium</Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  header: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#282828',
    marginBottom: 10,
  },
  logoContainer: {
    marginBottom: 10,
  },
  appName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 5,
  },
  userEmail: {
    fontSize: 14,
    color: '#b3b3b3',
  },
  drawerItems: {
    flex: 1,
    paddingTop: 10,
  },
  footer: {
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: '#282828',
  },
  premiumButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1DB954',
    padding: 12,
    borderRadius: 30,
  },
  premiumText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 8,
  },
});

export default CustomDrawerContent;