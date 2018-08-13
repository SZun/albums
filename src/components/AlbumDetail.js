import React from 'react';
import { Text, View } from 'react-native';

const AlbumDetail = ({ album }) => {
  const { title } = album;
  return (
    <View>
      <Text>{title}</Text>
    </View>
  );
};

export default AlbumDetail;
