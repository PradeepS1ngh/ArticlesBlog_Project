import React, { useContext, useEffect } from "react";

import Profile from "../layouts/Profile";
import TagArea from "../layouts/TagArea";
import Articles from "../Articles/Articles";
import AuthContext from "../../Context/Auth/AuthContext";

function Home() {
    const authContext = useContext(AuthContext);

    useEffect(() => {
        authContext.loadingUser();
    }, []);

    return (
        <div className="home">
            <div className="tagArea">
                <TagArea />
            </div>
            <div className="articleArea">
                <Articles />
            </div>
            <div className="profileArea">
                <Profile />
            </div>
        </div>
    );
}

export default Home;
