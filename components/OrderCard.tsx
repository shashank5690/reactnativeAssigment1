import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Order } from './types';

interface OrderCardProps {
  order: Order;
}

const OrderCard: React.FC<OrderCardProps> = ({ order }) => {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Image source={order.logo} style={styles.logo} />
        <View style={styles.headerText}>
          <Text style={styles.orderId}>#{order.id}</Text>
          <Text style={styles.items}>{order.items} Items</Text>
          <Text style={styles.storeName}>{order.storeName}</Text>
        </View>
      </View>
      <View style={styles.details}>
        <View style={styles.arrivalRow}>
          <Text style={styles.estimatedArrival}>Estimated Arrival</Text>
          <Text style={styles.nowText}>Now</Text>
        </View>
        <View style={styles.timeRow}>
        <Text style={styles.time}>
        {order.time}
        <Text style={styles.minutes}> min</Text>
        </Text>
          <Text style={styles.status}>{order.status}</Text>
        </View>
      </View>
      <View style={styles.buttons}>
        <TouchableOpacity style={styles.cancelButton}>
          <Text style={styles.cancelButtonText}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.trackButton}>
          <Text style={styles.trackButtonText}>Track Order</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    marginTop: 20,
    padding: 14,
    borderRadius: 30,
    backgroundColor: '#fff',
    marginBottom: 16,
    marginHorizontal: 12,
    shadowColor: '#a0a0a0',
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 8,
    elevation: 7,
  },  
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    marginRight: 10,
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
  orderId: {
    color: '#FE724C',
    alignSelf: 'flex-end',
    fontWeight: 'condensedBold',
    fontSize: 16,
    fontFamily: 'SofiaPro',  
  },
  storeName: {
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'SofiaPro', 
    color:'#000', 
    marginBottom: 12,
    marginLeft: 5,
  },
  details: {
    marginBottom: 10,
  },
  items: {
    color: '#888',
    fontFamily: 'SofiaPro',  
    marginLeft: 5,
  },
  arrivalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  estimatedArrival: {
    color: '#888',
    marginLeft: 5,
    fontFamily: 'SofiaPro',  
  },
  nowText: {
    color: '#888',
    fontFamily: 'SofiaPro',  
  },
  timeRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 5, 
  },
  time: {
    fontSize: 32,
    fontWeight: 'bold',
    marginLeft: 5,
    color: '#000',
    fontFamily: 'SofiaPro',  // Applied font
  },
  minutes: {
    fontSize: 14, // Smaller font size for "min"
    color: '#000', // Optional: gray color for "min"
  },
  status: {
    color: '#000',
    fontFamily: 'SofiaPro',
    fontWeight:'bold',  // Applied font
    marginBottom: 12,
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

export default OrderCard;
