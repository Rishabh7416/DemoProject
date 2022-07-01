import axios from 'axios'

export const HomeWomenAction = ()=>{
    return (dispatch, getState) =>{
        axios.get('https://mobilecdn.6thstreet.com/resources/20190121/en-ae/women.json')
        .then(response=>{
            dispatch({type :"WOMEN_HOME_DATA", payload : response.data.data})
        })
        .catch(error=>{
            console.log('error',error);
        })
        
    }
}

export const HomeMenAction = ()=>{
    return (dispatch, getState) =>{
        axios.get('https://mobilecdn.6thstreet.com/resources/20190121/en-ae/men.json')
        .then(response=>{
            dispatch({type :"MEN_HOME_DATA", payload : response.data.data})
        })
        .catch(error=>{
            console.log('error',error);
        })
        
    }
}

export const HomeKidsAction = ()=>{
    return (dispatch, getState) =>{
        axios.get('https://mobilecdn.6thstreet.com/resources/20190121/en-ae/kids.json')
        .then(response=>{
            dispatch({type :"KID_HOME_DATA", payload : response.data.data})
        })
        .catch(error=>{
            console.log('error',error);
        })
        
    }
}