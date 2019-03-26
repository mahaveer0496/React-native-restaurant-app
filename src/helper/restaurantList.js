const uuidv4 = require('uuid/v4')

const RestaurantList = Array.from({
	length : 5000,
}).map((item, index) => {
	const uuid = uuidv4()

	const number = index + 1
	return {
		id          : uuid,
		name        : `restaurant ${number}`,
		description : `this is dummy restaurant ${number}`,
		number      : number,
	}
})
export default RestaurantList
