import {
  SET_SEARCH_DATA,
  SET_SEARCH_RESULT,
  SET_SEARCH_ERROR,
  SET_SEARCH_LOADING
} from './actions'

const defaultState = {
  data: [],
  result: null,
  error: null,
  isLoading: false
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case SET_SEARCH_DATA:
      return {
        ...state,
        data: action.data,
        error: null,
        isLoading: false
      }
    case SET_SEARCH_RESULT:
      return {
        ...state,
        result: action.result,
        error: null,
        isLoading: false
      }
    case SET_SEARCH_ERROR:
      return {
        ...state,
        error: action.error,
        isLoading: false
      }
    case SET_SEARCH_LOADING:
      return {
        ...state,
        error: null,
        isLoading: action.state
      }
    default:
      return state
  }
}
