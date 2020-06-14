import {
  SET_SEARCH_DATA,
  SET_SEARCH_ERROR,
  SET_SEARCH_LOADING
} from './actions'

const defaultState = {
  data: [],
  error: null,
  isLoading: false
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case SET_SEARCH_DATA:
      return {
        ...state,
        data: action.data
      }
    case SET_SEARCH_ERROR:
      return {
        ...state,
        error: action.error,
        isLoading: defaultState.isLoading
      }
    case SET_SEARCH_LOADING:
      return {
        ...state,
        error: defaultState.error,
        isLoading: action.state
      }
    default:
      return state
  }
}
