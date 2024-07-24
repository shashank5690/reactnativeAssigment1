import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Order } from './types';
interface LatestOrderCardProps {
  order: Order;
}

const LatestOrderCard: React.FC<LatestOrderCardProps> = ({ order }) => {
  return (
    <View style={styles.card}>

      <View style={styles.header}>
        <Image source={order.logo} style={styles.logo} />
        <View style={styles.headerText}>
            {/* info row time, item price in flex row */}
          <View style={styles.infoRow}>
            <Text style={styles.date}>20 June,</Text>
            <Text style={styles.time}>{order.time}</Text>
            <Text style={styles.items}>•  {order.items} items</Text>
            <Text style={styles.price}>{order.price}</Text>
          </View>
          <Text style={styles.storeName}>{order.storeName}</Text>
          <Text style={styles.status}>• {order.status}</Text>
        </View>
      </View>
      <View style={styles.buttons}>
        <TouchableOpacity style={styles.cancelButton}>
          <Text style={styles.cancelButtonText}>Rate</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.trackButton}>
          <Text style={styles.trackButtonText}>Re-Order</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    marginTop: 16,
    padding: 14,
    borderRadius: 30,
    backgroundColor: '#fff',
    marginBottom: 5,
    marginHorizontal: 12,
    shadowColor: '#a0a0a0',
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 7,
    elevation: 7,
  }, 
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  logo: {
    width: 40,
    height: 40,
    marginRight: 15,
    marginLeft: 10,
  },
  headerText: {
    flex: 1,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  date: {
    color: '#888',
    fontFamily: 'SofiaPro',
  },
  time: {
    color: '#888',
    fontFamily: 'SofiaPro',
    marginLeft: -62,
  },
  items: {
    color: '#888',
    fontFamily: 'SofiaPro',
    marginLeft: -36,

  },
  price: {
    color: '#FE724C',
    fontFamily: 'SofiaPro',
    fontSize: 17,
  },
  storeName: {
    fontSize: 18,
    color:'#000',
    fontWeight: 'bold',
    fontFamily: 'SofiaPro',
  },
  status: {
    color: '#4EE476', 
    fontFamily: 'SofiaPro',
    marginBottom: 10,
    fontSize: 13,
    fontWeight: "regular",
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  cancelButton: {
    backgroundColor: '#fff',
    borderRadius: 30,
    paddingVertical: 12,
    paddingHorizontal: 45,
    marginRight: 10,
    marginLeft: 22,
    shadowColor: '#a0a0a0', // Grey shadow color
    shadowOffset: { width: 3, height: 3 }, // Shadow on right and bottom
    shadowOpacity: 0.8, // Slightly visible shadow
    shadowRadius: 12, // Smooth shadow
    elevation: 12, // Android elevation
  },
  cancelButtonText: {
    color: '#000',
    fontSize: 16,
    fontFamily: 'SofiaPro',
    fontWeight: 'bold',
  },
  trackButton: {
    backgroundColor: '#FE724C',
    borderRadius: 30,
    paddingVertical: 12,
    paddingHorizontal: 40,
    marginRight: 30,
    marginLeft: 10,
    shadowColor: '#FE724C', // Shadow color matching the button background
    shadowOffset: { width: 3, height: 3 }, // Shadow on right and bottom
    shadowOpacity: 0.8, // Slightly visible shadow
    shadowRadius: 18, // Smooth shadow
    elevation: 12, // Android elevation
  },
  trackButtonText: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'SofiaPro',
    fontWeight: 'bold',
  },
});

export default LatestOrderCard;
