import React from 'react';
import { Text, StyleSheet } from 'react-native';

const LatestOrdersHeading: React.FC = () => {
  return <Text style={styles.heading}>Lasted Orders</Text>;
};

const styles = StyleSheet.create({
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom:-2,
    color: '#000',
    fontFamily: 'SofiaPro',
    marginLeft: 18,
    marginTop: 15,
  },
});

export default LatestOrdersHeading;
