import {
	createStackNavigator,
	createAppContainer,
} from 'react-navigation'

import Home from './Home'
import RestaurantInfo from './RestaurantInfo'

const MainNavigator = createStackNavigator(
	{
		Home           : {screen: Home},
		RestaurantInfo : {screen: RestaurantInfo},
	},
	{
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
