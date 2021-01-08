import React, { useContext, useEffect, useState } from "react";
import Loader from "../layouts/Loader";
import Profile from "../layouts/Profile";
import TagArea from "../layouts/TagArea";
import ArticlesCom from "../Articles/ArticlesCom";
import AuthContext from "../../Context/Auth/AuthContext";
import ArticlesContext from "../../Context/Articles/ArticlesContext";
import loginImage from "./LoginImage";

function Home() {

    //AuthContext
    const authContext = useContext(AuthContext);


    //ArticleContext
    const articlesContext = useContext(ArticlesContext);
    const { Articles, getAllArticles } = articlesContext;


    const [loader, setloader] = useState(true);
    useEffect(() => {
        getAllArticles();
        setTimeout(() => {
            setloader(false);
        }, 1500);
    }, []);


    //AuthCheck
    useEffect(() => {
        authContext.loadingUser();
    }, [authContext.isAuthenticated]);


    
    return loader ? (
        <Loader />
    ) : (
            <div className="home">
                <div className="articleArea">
                    <ArticlesCom articles={Articles} />
                </div>
                <div className="profileArea">
                    <div className="tagArea">
                        <TagArea />
                    </div>
                    {!authContext.isAuthenticated ? (
                        <div className="guestProfile">
                            <img src={loginImage} alt="" />
                        </div>
                    ) : (
                            <Profile />
                        )}
                </div>
            </div>
        );
}

export default Home;
