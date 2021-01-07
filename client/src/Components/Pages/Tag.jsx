import React,{useContext , useEffect} from 'react'
import {useParams} from 'react-router-dom'
import ArticlesContext from '../../Context/Articles/ArticlesContext'
import TagArea from '../layouts/TagArea'
import ArticlesCom from '../Articles/ArticlesCom'

function Tag() {
    let { tagname } = useParams();
    const articlesContext = useContext(ArticlesContext);
    const { Articles , getAllArticles} = articlesContext;

    useEffect(() => {
        articlesContext.getAllArticlesByTAG(tagname);
    }, [tagname])

    return (
        <div className="home">
            <div className="tagArea">
                <TagArea />
            </div>
            <div className="articleArea">
                {Articles.length == 0 ? <h2>No Article Found</h2> : <ArticlesCom articles={Articles}/>}
            </div>
        </div>
    )
}

export default Tag
