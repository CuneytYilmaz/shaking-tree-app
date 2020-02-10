import { SET_APPLE_DOWN, SET_APPLE_BASKET, SET_APPLE_RESET } from './types';

export function setAppleDown (id, locations) {
	return {
    	type: SET_APPLE_DOWN,
		id,
		locations
    }
}

export function setAppleBasket (id, locations, onBasket) {
	return {
    	type: SET_APPLE_BASKET,
		id,
		locations,
		onBasket
    }
}

export function setAppleReset () {
	return {
    	type: SET_APPLE_RESET
    }
}