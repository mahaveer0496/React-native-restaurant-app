import React, {Component} from 'react'
import {
	Text,
	StyleSheet,
	View,
	TouchableOpacity,
} from 'react-native'

export default class RestaurantRow extends Component {
	render() {
		const {name, description, number} = this.props
		return (
			<View style={styles.ctr}>
				<View style={styles.restaurantNumber}>
					<Text
						style={[
							styles.whiteText,
							styles.centerText,
						]}>
						{number}
					</Text>
				</View>
				<View style={styles.restaurantInfo}>
					<Text>{name}</Text>
					<Text>{description}</Text>
				</View>

				<TouchableOpacity style={styles.button}>
					<Text style={styles.centerText}>View</Text>
				</TouchableOpacity>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	ctr              : {
		padding         : 20,
		flexDirection   : 'row',
		flex            : 1,
		elevation       : 3,
		backgroundColor : 'white',
	},
	restaurantNumber : {
		borderRadius    : 20,
		backgroundColor : '#0066cc',
		padding         : 10,
		width           : 40,
		height          : 40,
	},
	restaurantInfo   : {
		flex : 1,
	},
	button           : {
		borderRadius : 10,
		borderColor  : '#0066cc',
		borderWidth  : 1,
		alignSelf    : 'flex-start',
	},
	centerText       : {
		textAlign : 'center',
	},
	whiteText        : {
		color : 'white',
	},
})

// shadowColor   : 'black',
// 		shadowOffset  : {
// 			width  : 5,
// 			height : 5,
// 		},
// 		shadowOpacity : 0.2,
