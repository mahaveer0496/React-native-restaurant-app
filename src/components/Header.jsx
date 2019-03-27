import React, {Component} from 'react'
import {Text, StyleSheet, View} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'

export default class Header extends Component {
	render() {
		const {title, iconName} = this.props
		return (
			<View style={styles.ctr}>
				<Icon name={iconName} size={30} color='white' />
				<Text style={styles.text}> {title} </Text>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	ctr  : {
		flexDirection : 'row',
		paddingLeft   : 10,
	},
	text : {
		marginLeft : 10,
		fontWeight : 'bold',
		fontSize   : 18,
		color      : 'white',
	},
})
