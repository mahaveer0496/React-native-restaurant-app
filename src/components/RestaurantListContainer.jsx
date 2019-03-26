import React, {Component, PureComponent} from 'react'
import {
	Text,
	StyleSheet,
	View,
	ScrollView,
	FlatList,
} from 'react-native'

import restaurantList from './../helper/restaurantList'
import RestaurantRow from './RestaurantRow'
export default class RestaurantListContainer extends PureComponent {
	keyExtractor = (item, index) => item.id
	render() {
		return (
			<FlatList
				data={restaurantList}
				keyExtractor={this.keyExtractor}
				renderItem={({item}) => {
					return <RestaurantRow {...item} />
				}}
			/>
		)
	}
}

const styles = StyleSheet.create({})
