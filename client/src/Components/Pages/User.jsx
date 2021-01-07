import React,{useContext,useEffect } from 'react'
import { useParams , Link } from 'react-router-dom';
import ArticlesCom from '../Articles/ArticlesCom'
import ArticlesContext from '../../Context/Articles/ArticlesContext';

function User() {
    let { username } = useParams();
    const articlesContext = useContext(ArticlesContext);
    const { Articles , getUserArticles} = articlesContext;

    useEffect(() => {
        getUserArticles(username);
    }, [Articles])

    return (
        <div className="user">
            <Link to='/publish'><button className='btn btn-warning'>Create Article</button></Link>
            <div className="articleArea" style={{marginLeft:'20vw'}}>
                <ArticlesCom articles={Articles}/>
            </div>
        </div>
    )
}

export default User


