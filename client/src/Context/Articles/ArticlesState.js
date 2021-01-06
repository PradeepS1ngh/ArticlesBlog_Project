import React , {useReducer} from 'react';
import axios from 'axios';

import ArticlesContext from './ArticlesContext';
import ArticlesReducer from './ArticlesReducers';

import { 
    GET_All_ARTICLE,
    USER_ARTICLE,
    TAG_BASED_ARTICLE,
    ARTICLE_ERROR,
    CREATE_ARTICLE,

} from '../Types'

const ArticlesState = (props) => {
    const initialState = {
        Articles : [],
        error : null
    }

    const [state, dispatch] = useReducer(ArticlesReducer, initialState)

    // Get all Articles
    const getAllArticles = async() => {
        try {
            const res = await axios.get('/api/articles/');
            dispatch({type : GET_All_ARTICLE , payload : res.data.Articles});
        } catch (error) {
            console.log(error.message);
            dispatch({type : ARTICLE_ERROR , payload : error.message});
        }
    }

    return <ArticlesContext.Provider
        value={{
            Articles : state.Articles,
            error : state.error,
            getAllArticles
        }}
    >
        {props.children}
    </ArticlesContext.Provider>
}

export default ArticlesState;