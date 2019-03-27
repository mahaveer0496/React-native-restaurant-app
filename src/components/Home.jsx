import React, {Component} from 'react'
import {Text, StyleSheet, View} from 'react-native'

import RestaurantListContainer from './RestaurantListContainer'
import Header from './Header'

export default class Home extends Component {
	static navigationOptions = {
		headerTitle : <Header iconName='home' title='Home' />,
	}
	_navigate = (screen, params) => {
		const {navigate} = this.props.navigation
		navigate(screen, params)
	}

	render() {
		return (
			<View style={styles.home}>
				<RestaurantListContainer
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
