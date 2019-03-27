import React, {Component} from 'react'
import {Text, StyleSheet, View} from 'react-native'

export default class RestaurantInfo extends Component {
	static navigationOptions = ({navigation}) => {
		return {
			title : navigation.getParam('name', 'Restaurant'),
		}
	}

	render() {
		const {navigation} = this.props

		return (
			<View>
				<Text>
					{' '}
					{navigation.getParam(
						'description',
						'Restaurant Info',
					)}{' '}
				</Text>
			</View>
		)
	}
}

const styles = StyleSheet.create({})
