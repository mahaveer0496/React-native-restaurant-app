import React, {Component} from 'react'
import {Text, StyleSheet, View} from 'react-native'
import {TextInput} from 'react-native-gesture-handler'

export default class SearchRestaurant extends Component {
	render() {
		const {onChangeText, text} = this.props
		return (
			<TextInput
				style={styles.input}
				onChangeText={onChangeText}
				value={text}
				placeholder='Search restaurant by name'
			/>
		)
	}
}

const styles = StyleSheet.create({
	input : {
		padding         : 20,
		elevation       : 3,
		backgroundColor : 'white',
		marginBottom    : 10,
		marginTop       : 5,
	},
})
