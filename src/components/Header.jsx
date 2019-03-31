import React, {Component} from 'react'
import {Text, StyleSheet, View} from 'react-native'

export default class Header extends Component {
	render() {
		const {title, leftContent, rightContent} = this.props
		return (
			<View style={styles.ctr}>
				<View style={styles.left}>{leftContent}</View>
				<Text style={styles.text}>{title}</Text>
				<View style={styles.right}>{rightContent}</View>
			</View>
		)
	}
}
{
	/* <Icon name={iconName} size={30} color='white' />
<Text style={styles.text}> {title} </Text> */
}
{
	/* <Icon name={iconNameRight} size={30} color="white"/> */
}

const styles = StyleSheet.create({
	ctr  : {
		flexDirection : 'row',
		paddingLeft   : 10,
		justifyContent: 'space-between'
	},
	text : {
		marginLeft : 10,
		fontWeight : 'bold',
		fontSize   : 18,
		color      : 'white',
	},
	left:{

	}
})
