import {REHYDRATE} from 'redux-persist';

/**
 *  @exports
 */
const initialState = {
  WOMEN_HOME_DATA: [],
  MEN_HOME_DATA: [],
  KID_HOME_DATA: [],
};

/**
 * 
 * @param {*} state 
 * @param {*} action 
 * @returns WOMEN_HOME_DATA
 */
export const WomenDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'WOMEN_HOME_DATA':
      return {...state, WOMEN_HOME_DATA: action.payload};
    case REHYDRATE:
      var RECEIVE = action.payload;
      if (RECEIVE) {
        return {...state, ...RECEIVE};
      } else {
        return {...state};
      }
    default:
      return state;
  }
};

/**
 * 
 * @param {*} state 
 * @param {*} action 
 * @returns MEN_HOME_DATA
 */
export const MenDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'MEN_HOME_DATA':
      return {...state, MEN_HOME_DATA: action.payload};
    case REHYDRATE:
      var RECEIVE = action.payload;
      if (RECEIVE) {
        return {...state, ...RECEIVE};
      } else {
        return {...state};
      }
    default:
      return state;
  }
};

/**
 * 
 * @param {*} state 
 * @param {*} action 
 * @returns KID_HOME_DATA
 */
export const KidDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'KID_HOME_DATA':
      return {...state, KID_HOME_DATA: action.payload};
    case REHYDRATE:
      var RECEIVE = action.payload;
      if (RECEIVE) {
        return {...state, ...RECEIVE};
      } else {
        return {...state};
      }
    default:
      return state;
  }
};
