import axios from 'axios';

export const womenCategoryAction = () => {
  return (dispatch, getState) => {
    axios
      .get(
        'https://mobilecdn.6thstreet.com/resources/20190121/en-ae/categories_women.json',
      )
      .then(response => {
        dispatch({type: 'WOMEN_CATEGORY_DATA', payload: response.data.data});
      })
      .catch(error => {
        console.log('error', error);
      });
  };
};

export const menCategoryAction = () => {
  return (dispatch, getState) => {
    axios
      .get(
        'https://mobilecdn.6thstreet.com/resources/20190121/en-ae/categories_men.json',
      )
      .then(response => {
        dispatch({type: 'MEN_CATEGORY_DATA', payload: response.data.data});
      })
      .catch(error => {
        console.log('error', error);
      });
  };
};

export const kidCategoryAction = () => {
  return (dispatch, getState) => {
    axios
      .get(
        'https://mobilecdn.6thstreet.com/resources/20190121/en-ae/categories_kids.json',
      )
      .then(response => {
        dispatch({type: 'KID_CATEGORY_DATA', payload: response.data.data});
      })
      .catch(error => {
        console.log('error', error);
      });
  };
};
