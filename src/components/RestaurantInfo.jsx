import React, {Component} from 'react'
import {Text, StyleSheet, View} from 'react-native'

export default class RestaurantInfo extends Component {
	static navigationOptions = {
		title : 'Restaurant',
	}
	render() {
		return (
			<View>
				<Text> RestaurantInfo </Text>
			</View>
		)
	}
}

const styles = StyleSheet.create({})
