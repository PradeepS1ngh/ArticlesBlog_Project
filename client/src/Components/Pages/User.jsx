import React, { useContext, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom';
import ArticlesCom from '../Articles/ArticlesCom'
import ArticlesContext from '../../Context/Articles/ArticlesContext';
import AuthContext from '../../Context/Auth/AuthContext';

function User() {
    let { username } = useParams();
    const articlesContext = useContext(ArticlesContext);
    const { Articles, getUserArticles } = articlesContext;

    const authContext = useContext(AuthContext)
    const {name,email,phone,proffession} = authContext.user;

    useEffect(() => {
        getUserArticles(username);
    }, [Articles])

    return (
        <div className="user">
            <div className='profile'>
                <h2>{username}</h2>
                {name && <div className='m-2'><i class="fas fa-user userImage"></i><>{name}</></div>}
                {email && <div className='m-2'><i class="fas fa-envelope userImage"></i><>{email}</></div>}
                {proffession && <div className='m-2'><i class="fas fa-briefcase userImage"></i><>{proffession}</></div>}
                {phone && <div className='m-2'><i class="fas fa-phone-volume userImage"></i><>{phone}</></div>}
                <div className='profile-btn'>
                    <button className='btn btn-warning profilebtn'>{`Total Articles ${Articles.length}` }</button>
                    <Link to='/publish'><button className='btn btn-warning profilebtn'>Create Article</button></Link>
                </div>
            </div>
            <div className="articleArea" style={{  }}>
                <ArticlesCom articles={Articles} />
            </div>
        </div>
    )
}

export default User


