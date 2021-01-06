import React,{useContext , useEffect} from 'react'
import ArticlesContext from '../../Context/Articles/ArticlesContext';

import ArticleItems from './ArticleItems'

function Articles() {

    const articlesContext = useContext(ArticlesContext);
    const { Articles , getAllArticles} = articlesContext;
    const article = {
        "tagname" : "Gaming",
        "heading" : "PUBG BAN",
        "desc" : "this is article",
        "date" : "12/1/3000"
    }

    useEffect(()=>{
        getAllArticles();
    },[])

    return (
        <div className='article'>
            {Articles.map(article => {
                return <ArticleItems article={article} />
            })}
        </div>
    )
}

export default Articles