import React, {Component} from 'react'
import {Text, StyleSheet, View} from 'react-native'

import RestaurantListContainer from './RestaurantListContainer'

export default class Home extends Component {
	render() {
		return (
			<View style={styles.home}>
				<Text style={styles.homeText}>Home</Text>
				<RestaurantListContainer />
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
	},
})
