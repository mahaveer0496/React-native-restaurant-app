import React, {Component, Fragment} from 'react'
import {Text, StyleSheet, View, AsyncStorage} from 'react-native'
import {
	TextInput,
	TouchableOpacity,
} from 'react-native-gesture-handler'

export default class AddRestaurant extends Component {
	static navigationOptions = {
		title : 'Add restaurant',
	}

	state = {
		name        : '',
		description : '',
		url         : '',
	}

	_storeRestaurant = async () => {
		try {
			const value = await AsyncStorage.getItem(
				'restaurant',
			)

			const valueToStore =
				value ? JSON.stringify([
					...JSON.parse(value),
					this.state,
				]) :
				JSON.stringify([this.state])

			await AsyncStorage.setItem(
				'restaurant',
				valueToStore,
			)
		} catch (error) {
			console.log(error)
			// Error saving data
		}
	}
	_handleChange = (key, value) => {
		this.setState({[key]: value})
	}

	render() {
		return (
			<Fragment>
				<View style={styles.inputCtr}>
					<Text style={styles.label}>
						Restaurant Name
					</Text>
					<TextInput
						onChangeText={(name) =>
							this._handleChange('name', name)}
						style={styles.input}
						placeholder='Viva La Vista'
					/>
				</View>

				<View style={styles.inputCtr}>
					<Text style={styles.label}>
						Add Description
					</Text>
					<TextInput
						onChangeText={(description) =>
							this._handleChange(
								'description',
								description,
							)}
						style={[styles.input]}
						multiline={true}
						numberOfLines={4}
						placeholder='Best restaurant ever'
					/>
				</View>

				<View style={styles.inputCtr}>
					<Text style={styles.label}>
						Add Image URL here
					</Text>
					<TextInput
						onChangeText={(url) =>
							this._handleChange('url', url)}
						style={styles.input}
						placeholder='https://something.com/image'
					/>
				</View>

				<TouchableOpacity
					style={styles.button}
					onPress={this._storeRestaurant}>
					<Text style={styles.whiteText}>
						ADD RESTAURANT
					</Text>
				</TouchableOpacity>
			</Fragment>
		)
	}
}

const styles = StyleSheet.create({
	inputCtr  : {
		paddingLeft  : 10,
		paddingRight : 10,
		marginBottom : 10,
	},
	label     : {
		fontSize : 14,
	},
	input     : {
		padding         : 10,
		elevation       : 3,
		backgroundColor : 'white',
		marginBottom    : 10,
		marginTop       : 5,
	},
	button    : {
		backgroundColor : '#0066cc',
		padding         : 25,
		paddingTop      : 10,
		paddingBottom   : 10,
		borderRadius    : 4,
		elevation       : 3,
		alignSelf       : 'center',
	},
	whiteText : {
		color    : 'white',
		fontSize : 14,
	},
})
