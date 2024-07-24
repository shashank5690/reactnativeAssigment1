import React from 'react';
import { View, FlatList } from 'react-native';
import OrderCard from './OrderCard';
import { Order } from './types';

interface OrderListProps {
  orders: Order[];
}

const OrderList: React.FC<OrderListProps> = ({ orders }) => {
  const renderItem = ({ item }: { item: Order }) => <OrderCard order={item} />;

  return (
    <FlatList
      data={orders}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
    />
  );
};

export default OrderList;
