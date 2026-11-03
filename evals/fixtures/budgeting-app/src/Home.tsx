import { View, Text } from 'react-native';

export function Home({ spent, budget }: { spent: number; budget: number }) {
  return (
    <View>
      <Text>Gastado este mes</Text>
      <Text>{spent}</Text>
      <Text>Presupuesto: {budget}</Text>
    </View>
  );
}
