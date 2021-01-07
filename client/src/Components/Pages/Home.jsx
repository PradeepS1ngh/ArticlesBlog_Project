import React, { useContext, useEffect } from "react";

import Profile from "../layouts/Profile";
import TagArea from "../layouts/TagArea";
import ArticlesCom from "../Articles/ArticlesCom";
import AuthContext from "../../Context/Auth/AuthContext";
import ArticlesContext from '../../Context/Articles/ArticlesContext';

function Home() {
    const authContext = useContext(AuthContext);

    const articlesContext = useContext(ArticlesContext);
    const { Articles , getAllArticles} = articlesContext;

    useEffect(()=>{
        getAllArticles();
    },[])

    useEffect(() => {
        authContext.loadingUser();
    },[authContext.isAuthenticated]);

    return (
        <div className="home">
            <div className="tagArea">
                <TagArea />
            </div>
            <div className="articleArea">
                <ArticlesCom articles={Articles}/>
            </div>
            <div className="profileArea">
                <Profile />
            </div>
        </div>
    );
}

export default Home;