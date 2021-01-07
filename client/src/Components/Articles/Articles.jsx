import React,{useContext , useEffect} from 'react'
import ArticlesContext from '../../Context/Articles/ArticlesContext';

import ArticleItems from './ArticleItems'

function Articles() {

    const articlesContext = useContext(ArticlesContext);
    const { Articles , getAllArticles} = articlesContext;

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