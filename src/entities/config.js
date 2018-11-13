const identifier = 'CONFIG'
/**TYPES */
export const types = {
  FETCH: `${identifier}/FETCH`,
  SET: `${identifier}/SET`,
  ERROR: `${identifier}/ERROR`,
}

/**ACTIONS */
export const actions = {
  fetch: () => ({ type: types.FETCH }),
  set: config => ({ type: types.UPDATE, payload: config }),
}

/**REDUCERS */
export const initialState = { lang: 'en' }

export const reducer = (state = initialState, action) => {
  var handler = actionHandlers[action.type]
  if (handler) return handler(state, action.payload)
  return state
}

const actionHandlers = {}

actionHandlers[types.SET] = (state, newConfig) => {
  return { state, ...newConfig }
}

/**SELECTORS */
export const selectors = {
  getLanguage: state => state.config.lang,
}
