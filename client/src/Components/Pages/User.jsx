import React, { useContext, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom';
import Profile from '../layouts/Profile'
import ArticlesCom from '../Articles/ArticlesCom'
import ArticlesContext from '../../Context/Articles/ArticlesContext';
import AuthContext from '../../Context/Auth/AuthContext';

function User() {
    let { username } = useParams();

    //ArticlesContext
    const articlesContext = useContext(ArticlesContext);
    const { Articles, getUserArticles } = articlesContext;


    //AuthContext
    const authContext = useContext(AuthContext)
    const { name, email, phone, proffession } = authContext.user;


    useEffect(() => {
        getUserArticles(username);
    }, [Articles])



    return (
        <div className="user">
            <div className='profileArea'>
                <div className='profile'>
                    <h2>{username}</h2>
                    {name && <div className='userDetails'><i class="fas fa-user icon"></i><h3>{name}</h3></div>}
                    {email && <div className='userDetails'><i class="fas fa-envelope icon"></i><h3>{email}</h3></div>}
                    {proffession && <div className='userDetails'><i class="fas fa-briefcase icon"></i><h3>{proffession}</h3></div>}
                    {phone && <div className='userDetails'><i class="fas fa-phone-volume icon"></i><h3>{phone}</h3></div>}
                    <div className='profile-btn'>
                        <Link to={`/user/${username}`}><button className='btn btn-warning profilebtn'>{`Total Articles ${Articles.length}`}</button></Link>
                        <Link to='/publish'><button className='btn btn-warning profilebtn'>Create Article</button></Link>
                    </div>
                </div>
            </div>
            <div className="articleArea" >
                {Articles.length == 0 ? <h1 className='text-center'><span className='text-danger'>No</span> Article , Create Article in a Simple Way</h1> :
                    <ArticlesCom articles={Articles} />}
            </div>
        </div>
    )
}

export default User


