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
	_renderItem = ({item}) => (
		<RestaurantRow {...item} onPress={this.props.navigate} />
	)

	render() {
		return (
			<FlatList
				data={restaurantList}
				keyExtractor={this.keyExtractor}
				renderItem={this._renderItem}
				initialNumToRender={10}
				maxToRenderPerBatch={2}
				removeClippedSubviews
			/>
		)
	}
}

const styles = StyleSheet.create({})
