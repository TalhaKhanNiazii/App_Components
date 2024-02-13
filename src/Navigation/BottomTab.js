import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from '../Screens/BottomTabNavigation/Home';
import Favourites from '../Screens/BottomTabNavigation/Favourites';
import Details from '../Screens/BottomTabNavigation/Details';
import Account from '../Screens/BottomTabNavigation/Account';

const Tab = createBottomTabNavigator();

export default function MyBottomTab() {
  
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            position: 'absolute',
            margin: 15,
            borderRadius: 10,
          },
        }}
        initialRouteName="Home">
        <Tab.Screen
          options={{
            tabBarShowLabel: false,
            tabBarIcon: ({focused, color}) => (
                <Icon
                  name={focused ? 'grid' : 'grid'}
                  size={focused ? 30 : 26}
                  color={color}
                />
            ),
          }}
          name="Home"
          component={Home}
        />
        <Tab.Screen
          options={{
            tabBarShowLabel: false,
            tabBarIcon: ({focused, color}) => (
              <Icon
                name={
                  focused
                    ? 'plus-box-multiple-outline'
                    : 'plus-box-multiple-outline'
                }
                size={focused ? 30 : 26}
                color={color}
              />
            ),
          }}
          name="Details"
          component={Details}
        />     
        <Tab.Screen
          options={{
            tabBarShowLabel: false,
            tabBarIcon: ({focused, color}) => (
              <Icon
                name={
                  focused ? 'heart-multiple-outline' : 'heart-multiple-outline'
                }
                size={focused ? 30 : 26}
                color={color}
              />
            ),
          }}
          name="Favourites"
          component={Favourites}
        />
        <Tab.Screen
          options={{
            tabBarShowLabel: false,
            tabBarIcon: ({focused, color}) => (
              <Icon
                name={focused ? 'account-star-outline' : 'account-star-outline'}
                size={focused ? 30 : 26}
                color={color}
              />
            ),
          }}
          name="Account"
          component={Account}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
