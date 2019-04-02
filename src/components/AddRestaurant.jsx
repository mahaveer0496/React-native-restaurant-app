import React, {Component, Fragment} from 'react'
import {Text, StyleSheet, View} from 'react-native'
import {TextInput} from 'react-native-gesture-handler'

export default class AddRestaurant extends Component {
	static navigationOptions = {
		title : 'Add restaurant',
	}
	render() {
		const {onChangeText, text} = this.props
		return (
			<Fragment>
				<View style={styles.inputCtr}>
					<Text style={styles.label}>
						Restaurant Name
					</Text>
					<TextInput
						style={styles.input}
						onChangeText={onChangeText}
						value={text}
						placeholder='Viva La Vista'
					/>
				</View>
				<View style={styles.inputCtr}>
					<Text style={styles.label}>
						Add Description
					</Text>
					<TextInput
						style={[styles.input]}
						multiline={true}
						numberOfLines={4}
						onChangeText={onChangeText}
						value={text}
						placeholder='Best restaurant ever'
					/>
				</View>
				<View style={styles.inputCtr}>
					<Text style={styles.label}>
						Add Image URL here
					</Text>
					<TextInput
						style={styles.input}
						onChangeText={onChangeText}
						value={text}
						placeholder='Search restaurant by name'
					/>
				</View>
			</Fragment>
		)
	}
}

const styles = StyleSheet.create({
	inputCtr : {
		paddingLeft  : 10,
		paddingRight : 10,
		marginBottom : 10,
	},
	label    : {
		fontSize : 14,
	},
	input    : {
		padding         : 10,
		elevation       : 3,
		backgroundColor : 'white',
		marginBottom    : 10,
		marginTop       : 5,
	},
})
