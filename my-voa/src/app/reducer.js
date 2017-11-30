import { combineReducers } from 'redux';
import { reducer as headerReducer } from '../components/CommonWrapper/';
import { reducer as indexReducer } from '../pages/index/';
import { reducer as listReducer } from '../pages/list/';

export default combineReducers({
	header:headerReducer,
	index:indexReducer,
	list:listReducer
})