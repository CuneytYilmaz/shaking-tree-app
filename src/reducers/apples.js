import { SET_APPLE_DOWN, SET_APPLE_BASKET, SET_APPLE_RESET } from '../actions/types';
import { _apples } from '../utils/_APPLES'

// Uygulamada kullanılan tüm action'lar aşağıdaki switch/case yapısı ile kontrol ediliyor ve yeni state üretiliyor. Buradaki initial state, _APPLES datası olacak şekilde set ediliyor.
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