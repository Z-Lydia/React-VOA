import { GET_LIST_DATE } from './actionTypes'

const defaultState = {
	data:{
		"previous":[],
		"titlePic":[],
		"leftPic":[],
		"magPic":[]
	}
}

export default ( state = defaultState,action ) => {
	if( action.type === GET_LIST_DATE ){
		const newState = Object.assign( {},state );
		newState.data = action.value;
		return newState;
	}
	return state;
}