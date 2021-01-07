import React, { useState, useContext } from "react";
import { Redirect, useHistory } from "react-router-dom";

import AuthContext from "../../Context/Auth/AuthContext";
import ArticlesContext from "../../Context/Articles/ArticlesContext";
import AlertContext from '../../Context/Alert/AlertContext'

function CreateArticle() {

    //Alert Context
    const alertContext = useContext(AlertContext);
    const { setAlert } = alertContext;

    //AuthContext
    const authContext = useContext(AuthContext);
    const { user } = authContext;

    //ArticleContext
    const articlesContext = useContext(ArticlesContext);

    let history = useHistory();

    const [article, setArticle] = useState({
        tagname: "",
        heading: "",
        desc: "",
    });

    const onsubmit = (e) => {
        e.preventDefault();
        if (tagname === "" || heading === "" || desc === "") {
            setAlert("Fill The Form",'warning');
        } else {
            articlesContext.createNewArticle({
                tagname,
                heading,
                desc,
                username: user.username,
            });
            setAlert('Post Successfully','success')
            history.push("/");
        }
    };
    const { tagname, heading, desc } = article;

    const onchange = (e) => {
        setArticle({ ...article, [e.target.name]: e.target.value });
    };

    return (
        <div className="create-article ">
            <h1 className="text-center text-light">Create New Article</h1>
            <form onSubmit={onsubmit}>
                <div className="m-lg-3">
                    <label htmlFor="tagname ">Tag</label>
                    <input
                        className="form-control"
                        type="text"
                        name="tagname"
                        value={tagname}
                        onChange={onchange}
                    />
                </div>
                <div className="m-lg-3">
                    <label htmlFor="heading ">Heading</label>
                    <input
                        className="form-control"
                        type="text"
                        name="heading"
                        value={heading}
                        onChange={onchange}
                    />
                </div>
                <div className="m-lg-3 desc">
                    <label htmlFor="desc ">Descriptions</label>
                    <textarea
                        style={{ width: "100%" }}
                        className="form-control"
                        type="text"
                        name="desc"
                        value={desc}
                        onChange={onchange}
                    />
                </div>
                <button className="btn btn-primary w-100 m-lg-1">Post</button>
            </form>
        </div>
    );
}

export default CreateArticle;
