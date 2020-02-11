import { combineReducers } from 'redux';
import apples from './apples';

// Tüm reducer'lar reducers/index.js'in içerisinde toplanıyor. Apples dışında reducer olsaydı buraya eklenecekti.
export default combineReducers({
	apples,
});