import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Animated, { FadeInRight } from 'react-native-reanimated';
import { Easing } from 'react-native-reanimated';


const PlaylistsScreen = () => {
  const playlists = [
    {
      id: '1',
      title: 'Discover Weekly',
      description: 'Your weekly mixtape of fresh music',
      songs: 30,
      color: '#1DB954',
    },
    {
      id: '2',
      title: 'Release Radar',
      description: 'New music from artists you follow',
      songs: 25,
      color: '#535353',
    },
    {
      id: '3',
      title: 'Daily Mix 1',
      description: 'Arctic Monkeys, The Strokes, and more',
      songs: 50,
      color: '#E91429',
    },
    {
      id: '4',
      title: 'Chill Vibes',
      description: 'Relaxing tracks for your downtime',
      songs: 45,
      color: '#509BF5',
    },
    {
      id: '5',
      title: 'Workout Beast Mode',
      description: 'High energy tracks to power your workout',
      songs: 60,
      color: '#FF6437',
    },
  ];

  const renderPlaylist = ({ item, index }) => (
    <Animated.View
      entering={FadeInRight.delay(index * 100).duration(600).easing(Easing.ease)}
    >
      <TouchableOpacity style={styles.playlistItem}>
        <View style={[styles.playlistCover, { backgroundColor: item.color }]}>
          <Ionicons name="musical-notes" size={40} color="#fff" />
        </View>
        <View style={styles.playlistInfo}>
          <Text style={styles.playlistTitle}>{item.title}</Text>
          <Text style={styles.playlistDescription}>{item.description}</Text>
          <Text style={styles.songCount}>{item.songs} songs</Text>
        </View>
        <Ionicons name="play-circle" size={40} color="#1DB954" />
      </TouchableOpacity>
    </Animated.View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Your Library</Text>
        <TouchableOpacity style={styles.addButton}>
          <Ionicons name="add-circle-outline" size={30} color="#fff" />
        </TouchableOpacity>
      </View>
      <FlatList
        data={playlists}
        renderItem={renderPlaylist}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    paddingBottom: 10,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  addButton: {
    padding: 5,
  },
  listContainer: {
    padding: 20,
    paddingTop: 10,
  },
  playlistItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#282828',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
  },
  playlistCover: {
    width: 80,
    height: 80,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  playlistInfo: {
    flex: 1,
  },
  playlistTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 5,
  },
  playlistDescription: {
    fontSize: 14,
    color: '#b3b3b3',
    marginBottom: 5,
  },
  songCount: {
    fontSize: 12,
    color: '#b3b3b3',
  },
});
export default PlaylistsScreen;