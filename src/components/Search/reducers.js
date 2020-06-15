import {
  SET_SEARCH_DATA,
  SET_SEARCH_RESULT,
  SET_SEARCH_ERROR
} from './actions'

const defaultState = {
  data: [],
  result: null,
  error: null
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case SET_SEARCH_DATA:
      return {
        ...state,
        data: action.data,
        error: null
      }
    case SET_SEARCH_RESULT:
      return {
        ...state,
        result: action.result,
        error: null
      }
    case SET_SEARCH_ERROR:
      return {
        ...state,
        error: action.error
      }
    default:
      return state
  }
}
