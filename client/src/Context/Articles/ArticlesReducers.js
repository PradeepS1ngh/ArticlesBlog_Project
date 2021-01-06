import { 
    GET_All_ARTICLE,
    USER_ARTICLE,
    TAG_BASED_ARTICLE,
    ARTICLE_ERROR,
    CREATE_ARTICLE,
} from '../Types'

export default (state,action) => {
    switch (action.type) {
        case GET_All_ARTICLE :
            return {
                ...state,
                Articles : action.payload,
                error : null,
            }
        case ARTICLE_ERROR :
            return {
                ...state,
                Articles : [],
                error : action.payload
            }
        default:
            return state;
    }
}