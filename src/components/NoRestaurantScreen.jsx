import React, {Component} from 'react'
import {Text, StyleSheet, View, Image} from 'react-native'
import {TouchableOpacity} from 'react-native-gesture-handler'

export default class NoRestaurantScreen extends Component {
	render() {
		const {navigate} = this.props
		return (
			<View
				style={[
					StyleSheet.absoluteFill,
					{
						alignItems     : 'center',
						justifyContent : 'center',
					},
				]}>
				<Image
					style={styles.image}
					source={require('./../images/hamburger.png')}
				/>
				<TouchableOpacity
					style={styles.button}
					onPress={() => navigate('AddRestaurant')}>
					<Text style={styles.whiteText}>
						ADD YOUR FIRST RESTAURANT
					</Text>
				</TouchableOpacity>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	ctr       : {
		padding : 10,
	},
	image     : {
		width  : '100%',
		height : `50%`,
	},
	button    : {
		backgroundColor : '#0066cc',
		padding         : 25,
		paddingTop      : 10,
		paddingBottom   : 10,
		borderRadius    : 4,
		elevation       : 3,
	},
	whiteText : {
		color    : 'white',
		fontSize : 14,
	},
})
