import React from 'react'

function ArticleItems({article}) {
    return (
        <div className='articleItem'>
            <h3>{article.tagname}</h3>
            <h2>{article.heading}</h2>
            <h5>{article.desc}</h5>
            <h6>{article.date}</h6>
        </div>
    )
}

export default ArticleItems
