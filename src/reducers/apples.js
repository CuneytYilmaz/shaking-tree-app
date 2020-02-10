import { SET_APPLE_DOWN, SET_APPLE_BASKET, SET_APPLE_RESET } from '../actions/types';
import { _apples } from '../utils/_APPLES'

export default function apples (state = _apples, action) {
	switch (action.type) {
      case SET_APPLE_DOWN:
        return {
          ...state,
          [action.id]: {
            ...state[action.id],
            ...action.locations
          }
        }
      case SET_APPLE_BASKET:
        return {
          ...state,
          [action.id]: {
            ...state[action.id],
            ...action.locations,
            onBasket: action.onBasket
          }
        }
      case SET_APPLE_RESET:
        return _apples;
      default :
       	return state;
    }
}