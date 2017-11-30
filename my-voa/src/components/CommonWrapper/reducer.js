import { GETHEADER } from './actionTypes'

const defaultState = {
	data:{
		"title":[],
		"nav":[]
	}
}

export default ( state = defaultState,action ) =>{
	if( action.type===GETHEADER ){
		const newState = Object.assign( {},state );
		newState.data = action.value;
		return newState;
	}
	return state
}