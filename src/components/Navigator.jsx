import React from 'react'
import {
	createStackNavigator,
	createAppContainer,
} from 'react-navigation'

import Home from './Home'
import RestaurantInfo from './RestaurantInfo'
import AddRestaurant from './AddRestaurant'

const MainNavigator = createStackNavigator(
	{
		Home           : {
			screen : Home,
		},
		RestaurantInfo : {screen: RestaurantInfo},
		AddRestaurant  : {screen: AddRestaurant},
	},
	{
		initialRouteName         : 'Home',
		defaultNavigationOptions : {
			headerStyle      : {
				backgroundColor : '#0066cc',
			},
			headerTintColor  : '#fff',
			headerTitleStyle : {
				fontWeight : 'bold',
			},
		},
	},
)

const Navigator = createAppContainer(MainNavigator)

export default Navigator
