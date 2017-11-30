import { GET_INDEX_DATA } from './actionTypes'

const defaultState = {
	data:{
		"content":[],
		"friendLink":[]
	}
}

export default ( state = defaultState,action ) => {
	if( action.type === GET_INDEX_DATA ){
		const newState = Object.assign( {},state );
		newState.data = action.value;
		return newState;
	}
	return state;
}