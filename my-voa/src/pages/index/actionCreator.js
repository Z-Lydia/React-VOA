import { GET_INDEX_DATA } from './actionTypes'

export const getIndex = ( value ) => ( {
	type:GET_INDEX_DATA,
	value:value
} )