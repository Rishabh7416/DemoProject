/**
 * INITIAL_STATES
 */
const initialState = {
  WOMEN_CATEGORY_DATA: [],
  MEN_CATEGORY_DATA: [],
  KID_CATEGORY_DATA: [],
};

/**
 * 
 * @param {*} state 
 * @param {*} action 
 * @returns WOMEN_CATEGORY_DATA
 */
export const womenCategoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'WOMEN_CATEGORY_DATA':
      return {...state, WOMEN_CATEGORY_DATA: action.payload};
    default:
      return state;
  }
};

/**
 * 
 * @param {*} state 
 * @param {*} action 
 * @returns MEN_CATEGORY_DATA
 */
export const menCategoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'MEN_CATEGORY_DATA':
      return {...state, MEN_CATEGORY_DATA: action.payload};
    default:
      return state;
  }
};

/**
 * 
 * @param {*} state 
 * @param {*} action 
 * @returns KID_CATEGORY_DATA
 */
export const kidCategoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'KID_CATEGORY_DATA':
      return {...state, KID_CATEGORY_DATA: action.payload};
    default:
      return state;
  }
};
