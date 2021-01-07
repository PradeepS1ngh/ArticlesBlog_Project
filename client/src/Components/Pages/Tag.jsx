import React, { useContext, useEffect } from 'react'
import { useParams , Link } from 'react-router-dom'
import ArticlesContext from '../../Context/Articles/ArticlesContext'
import TagArea from '../layouts/TagArea'
import ArticlesCom from '../Articles/ArticlesCom'

function Tag() {
    let { tagname } = useParams();
    const articlesContext = useContext(ArticlesContext);
    const { Articles, getAllArticles } = articlesContext;

    useEffect(() => {
        articlesContext.getAllArticlesByTAG(tagname);
    }, [tagname])

    return (
        <div className="TagPage">
            <div className="tagArea">
                <TagArea />
                <Link to='/' className='btn btn-primary m-3'>Back</Link>
            </div>
            <div className='countShow'><h4>{`${Articles.length } Articles Founds`}</h4></div>
            <div className="articleArea">
                {Articles.length == 0 ? <><img src="https://unbxd.com/wp-content/uploads/2014/02/No-results-found.jpg" alt="" className='noTagFound'/></> : <ArticlesCom articles={Articles} />}
            </div>
        </div>
    )
}

export default Tag
