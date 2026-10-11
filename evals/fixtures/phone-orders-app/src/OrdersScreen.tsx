// Designed for phones: a list; tapping an order pushes a detail screen.
export function OrdersScreen({ orders, navigation }: any) {
  return (
    <FlatList
      data={orders}
      keyExtractor={(o: any) => o.id}
      renderItem={({ item }: any) => (
        <Pressable onPress={() => navigation.navigate('OrderDetail', { id: item.id })}>
          <Text>{item.table} · {item.items} items · {item.status}</Text>
        </Pressable>
      )}
    />
  );
}
