import React from 'react';
import { View } from 'react-native';

const CardSection = ({ children }) => (
  <View style={styles.contianerStyle}>{children}</View>
);

const styles = {
  contianerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    postion: 'relative'
  }
};

export default CardSection;
