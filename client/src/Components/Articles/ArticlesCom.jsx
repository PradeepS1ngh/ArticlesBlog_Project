import React,{useContext , useEffect} from 'react'

import ArticleItems from './ArticleItems'

function Articles({articles}) {
    return (
        <div className='article'>
            {articles.map(article => {
                return <ArticleItems article={article} />
            })}
        </div>
    )
}

export default Articles