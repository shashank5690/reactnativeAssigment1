import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Header from '../components/Header';
import OrderList from '../components/OrderList';
import { Order } from '../components/types';
import LatestOrder from '../components/LatestOrder';
import LatestOrdersHeading from '../components/Lastedorderheading';

const MyOrdersScreen: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<'Upcoming' | 'History'>('Upcoming');

  const orders: Order[] = [
    {
      id: '264100',
      storeName: 'Starbucks',
      items: 3,
      time: '25',
      price: '$17.50',
      status: 'Food on the way',
      logo: require('../assets/starbucks.png'),
    },
    // Add more orders here    
  ];

  const latestOrders: Order[] = [
    {
      id: '264100',
      storeName: 'Jimmy Johns',
      items: 3,
      time: '10:30',
      status: 'Order Delivered',
      price: '$17.50',
      logo: require('../assets/jimmy.png'),
    },
    // Add more latest orders here
    {
      id:'264101',
      storeName:'Subway',
      items: 2,
      time: '11:30',
      price: '$20.50',
      status: 'Order Delivered',
      logo: require('../assets/subway.png'),
    }
  ];

  const handleTabChange = (tab: 'Upcoming' | 'History') => {
    setSelectedTab(tab);
  };

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.tabs}>
        <TouchableOpacity
          style={[styles.tab, selectedTab === 'Upcoming' && styles.activeTab]}
          onPress={() => handleTabChange('Upcoming')}
        >
          <Text style={[styles.tabText, selectedTab === 'Upcoming' && styles.activeTabText]}>
            Upcoming
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, selectedTab === 'History' && styles.activeTab]}
          onPress={() => handleTabChange('History')}
        >
          <Text style={[styles.tabText, selectedTab === 'History' && styles.activeTabText]}>
            History
          </Text>
        </TouchableOpacity>
      </View>
       {/* // Add OrderList and LatestOrder components here */}
        <View>
          <OrderList orders={orders} />
          <LatestOrdersHeading/>
          {latestOrders.map((order) => (
            <LatestOrder order={order} key={order.id} />
          ))}
          </View>

    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    backgroundColor: '#fff',
    paddingVertical: 3,
    paddingHorizontal: 2,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#F2EAEA',
    width: '88%',
    alignSelf: 'center',
  },
  tab: {
    paddingVertical: 15,
    paddingHorizontal: 57,
    borderRadius: 25,
  },
  activeTab: {
    backgroundColor: '#FE724C',
  },
  tabText: {
    color: '#FE724C',
    fontSize: 16,
  },
  activeTabText: {
    color: '#fff',
  },
});

export default MyOrdersScreen;
