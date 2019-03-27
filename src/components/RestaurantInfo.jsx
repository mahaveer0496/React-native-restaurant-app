import React, {Component} from 'react'
import {Text, StyleSheet, View, Image} from 'react-native'
import Header from './Header'

export default class RestaurantInfo extends Component {
	static navigationOptions = ({navigation}) => {
		const title = navigation.getParam('name', 'Restaurant')
		return {
			headerTitle : (
				<Header iconName='utensils' title={title} />
			),
		}
	}

	render() {
		const {navigation} = this.props
		return (
			<View style={styles.ctr}>
				<View style={styles.thumbnail}>
					<Image
						source={{
							uri :
								'https://picsum.photos/300/300',
						}}
						style={styles.image}
					/>
					<Text style={styles.description}>
						{' '}
						{navigation.getParam(
							'description',
							'Restaurant Info',
						)}{' '}
					</Text>
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	ctr         : {
		flex           : 1,
		justifyContent : 'flex-start',
		alignItems     : 'center',
	},
	thumbnail   : {
		marginTop    : 20,
		elevation    : 4,
		borderRadius : 8,
		overflow     : 'hidden',
	},
	image       : {
		width  : 300,
		height : 300,
	},
	description : {
		top             : -1,
		fontSize        : 18,
		padding         : 10,
		backgroundColor : '#0066cc',
		color           : 'white',
	},
})
