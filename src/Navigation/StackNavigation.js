import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Home from '../Screens/NavigationScreens/Home';
import Login from '../Screens/NavigationScreens/Login';
import MyProductList from '../Screens/FlatList/MyProductList';
import MyProductDetails from '../Screens/FlatList/MyProductDetails';
import ProductContext from '../Screens/FlatList/ProductContext';

const Stack = createStackNavigator();

export default function MyStack() {
  return (
    <ProductContext>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MyProductList">
      <Stack.Screen  options={{headerShown: false}} name="Login" component={Login} />
        <Stack.Screen  options={{headerShown: false}} name="Home" component={Home} />
        <Stack.Screen options={{headerShown:false}} name="MyProductList" component={MyProductList} />
        <Stack.Screen options={{headerShown:false}} name="MyProductDetails" component={MyProductDetails} />
       </Stack.Navigator>
    </NavigationContainer>
    </ProductContext>
  );
}
