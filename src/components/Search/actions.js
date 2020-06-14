export const SET_SEARCH_DATA = 'SET_SEARCH_DATA'
export const SET_SEARCH_ERROR = 'SET_SEARCH_ERROR'
export const SET_SEARCH_LOADING = 'SET_SEARCH_LOADING'


export const setData = (data) => {
  return {
    type: SET_SEARCH_DATA,
    data
  }
}

export const setError = (error) => {
  return {
    type: SET_SEARCH_ERROR,
    error
  }
}

export const setLoading = (state) => {
  return {
    type: SET_SEARCH_LOADING,
    state
  }
}

