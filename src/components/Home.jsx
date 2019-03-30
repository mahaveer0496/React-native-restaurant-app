import React, {Component} from 'react'
import {Text, StyleSheet, View, Alert} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'

import RestaurantListContainer from './RestaurantListContainer'
import Header from './Header'
import SearchRestaurant from './SearchRestaurant'

import restaurantList from './../helper/restaurantList'

export default class Home extends Component {
	static navigationOptions = ({navigation}) => {
		const rightIconClick = navigation.getParam(
			'rightIconClick',
		)
		return {
			headerTitle : (
				<Header
					leftContent={
						<Icon
							name='home'
							size={24}
							color='white'
						/>
					}
					rightContent={
						<Icon
							onPress={rightIconClick}
							name='plus'
							size={24}
							color='white'
							solid
						/>
					}
					title='Home'
				/>
			),
		}
	}
	state = {
		restaurantList : restaurantList,
		textFromInput  : '',
	}

	rightIconClick = () => {
		Alert.alert('woot')
	}

	componentDidMount = () => {
		const {navigation} = this.props
		navigation.setParams({
			rightIconClick : this.rightIconClick,
		})
	}

	_navigate = (screen, params) => {
		const {navigate} = this.props.navigation
		navigate(screen, params)
	}
	filterRestaurantByName = (restaurants, name) => {
		if (name)
			return restaurants.filter(
				(restaurant) => restaurant.name.search(name) > 0,
			)
		return restaurantList
	}

	handleInputTextChange = (text) => {
		this.setState({
			textFromInput  : text,
			restaurantList : this.filterRestaurantByName(
				restaurantList,
				text,
			),
		})
	}

	render() {
		const {restaurantList, textFromInput} = this.state
		return (
			<View style={styles.home}>
				<SearchRestaurant
					text={textFromInput}
					onChangeText={this.handleInputTextChange}
				/>
				<RestaurantListContainer
					restaurantList={restaurantList}
					navigate={this._navigate}
				/>
			</View>
		)
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
