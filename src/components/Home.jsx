import React, {Component} from 'react'
import {
	Text,
	StyleSheet,
	View,
	Alert,
	AsyncStorage,
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'

import RestaurantListContainer from './RestaurantListContainer'
import Header from './Header'
import SearchRestaurant from './SearchRestaurant'
import NoRestaurantScreen from './NoRestaurantScreen'

export default class Home extends Component {
	static navigationOptions = ({navigation}) => ({
		headerTitle : (
			<Header
				leftContent={
					<Icon name='home' size={24} color='white' />
				}
				rightContent={
					<Icon
						onPress={() =>
							navigation.navigate('AddRestaurant')}
						name='plus'
						size={24}
						color='white'
						solid
					/>
				}
				title='Home'
			/>
		),
	})

	state = {
		restaurantList      : [],
		savedRestaurantList : [],
		textFromInput       : '',
	}

	navigate = (screen, params) => {
		const {navigate} = this.props.navigation
		navigate(screen, params)
	}

	filterRestaurantByName = (restaurants, name) => {
		// debugger
		if (name)
			return restaurants.filter((restaurant) =>
				restaurant.name.includes(name),
			)
		return restaurants
	}

	handleInputTextChange = (text) => {
		const {savedRestaurantList} = this.state

		this.setState({
			textFromInput  : text,
			restaurantList : this.filterRestaurantByName(
				savedRestaurantList,
				text,
			),
		})
	}
	_retrieveData = async () => {
		try {
			let value = await AsyncStorage.getItem('restaurant')
			value = JSON.parse(value).filter(Boolean)

			if (value !== null) {
				this.setState({
					savedRestaurantList : value,
					restaurantList      : value,
				})
			}
		} catch (error) {
			console.log(error)
		}
	}

	componentDidMount = () => {
		const {navigation} = this.props
		navigation.setParams({
			rightIconClick : this.rightIconClick,
		})
		this._retrieveData()
	}

	render() {
		const {
			savedRestaurantList,
			restaurantList,
			textFromInput,
		} = this.state

		if (savedRestaurantList.length > 0)
			return (
				<View style={styles.home}>
					<SearchRestaurant
						text={textFromInput}
						onChangeText={this.handleInputTextChange}
					/>
					<RestaurantListContainer
						restaurantList={restaurantList}
						navigate={this.navigate}
					/>
				</View>
			)
		return <NoRestaurantScreen navigate={this.navigate} />
	}
}

const styles = StyleSheet.create({
	home     : {
		flex : 1,
	},
	homeText : {
		backgroundColor : '#0066cc',
		color           : 'white',
		fontSize        : 24,
		padding         : 10,
	},
})
