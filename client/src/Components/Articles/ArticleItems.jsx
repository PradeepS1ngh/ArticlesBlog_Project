import React from 'react'

function ArticleItems({article}) {

    const {username , tagname , heading , desc , date} = article
    return (
        <div className='articleItem'>
            <span class="badge rounded-pill bg-primary text-light tag">{tagname}</span>
            <div className='heading'>
                <h2>{heading}</h2>
            </div>
            <div className='UserandDate'>
                <div><i class="fas fa-user m-3"></i>{username}</div>
                <div><i class="far fa-clock m-3"></i>{date}</div>
            </div>
            <hr style={{ margin: "1rem 2rem", borderTop: "1px solid rgb(161, 161, 161)" }} />
            <div className='Articleimage'>
            </div>
            <p>{desc}</p>
        </div>
    )
}

export default ArticleItems
