import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import 'react-native-gesture-handler';
import { store } from './store';
import { Provider } from 'react-redux'
import BasketScreen from './screens/BasketScreen';
import PreparingOrderScreen from './screens/PreparingOrderScreen';
import DeliveryScreen from './screens/DeliveryScreen';
import Restaurantscreen from './screens/RestaurantScreen';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Restaurant" component={Restaurantscreen} />
          <Stack.Screen name="Basket" component={BasketScreen} options={{ presentation: "modal"}}/>
          <Stack.Screen name="PreparingOrderScreen" component={PreparingOrderScreen} options={{presentation: "fullScreenModal", headerShown:false }}/>
          <Stack.Screen name="Delivery" component={DeliveryScreen} options={{presentation: "fullScreenModal", headerShown: false }}/>
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
}


