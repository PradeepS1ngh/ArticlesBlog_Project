import React,{useState , useContext}from 'react'
import {useHistory} from 'react-router-dom'

import ArticlesContext from '../../Context/Articles/ArticlesContext'

function TagArea() {

    const articlesContext = useContext(ArticlesContext)
    const [tag, setTag] = useState('')

    let history = useHistory();
    const onchange = (e) => {
        console.log("clicked");
        return setTag(e.target.value);
    }

    const searchTagName = () => {
        if(tag === ''){
            alert('please enter tagName')
        }else{
            
            history.push(`/tag/${tag}`);
        }

    }
    return (
        <>
            <input type="text" className='form-control' onChange={onchange} name='tag' placeholder='Search By Tag...' value={tag}/>
            <button className='btn btn-danger' onClick = {searchTagName}> search </button>
        </>
    )
}

export default TagArea
