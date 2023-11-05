import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/Home';
import 'react-native-gesture-handler';
import { store } from './store';
import { Provider } from 'react-redux'
import Home from './screens/Home';
import Restaurant from './screens/Restaurant';
import PreparingOrder from './screens/PreparingOrder';
import Delivery from './screens/Delivery';
import Basket from './screens/Basket';



const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Restaurant" component={Restaurant} options={{presentation: "fullScreenModal", headerShown:false }}/>
          <Stack.Screen name="Basket" component={Basket} options={{presentation: "fullScreenModal", headerShown:false }}/>
          <Stack.Screen name="PreparingOrderScreen" component={PreparingOrder} options={{presentation: "fullScreenModal", headerShown:false }}/>
          <Stack.Screen name="Delivery" component={Delivery} options={{presentation: "fullScreenModal", headerShown: false }}/>
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
}


