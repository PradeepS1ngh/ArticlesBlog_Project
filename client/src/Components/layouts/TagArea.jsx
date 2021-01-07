import React,{useState , useContext}from 'react'
import {useHistory} from 'react-router-dom'

import ArticlesContext from '../../Context/Articles/ArticlesContext'
import AlertContext from '../../Context/Alert/AlertContext'

function TagArea() {

    const articlesContext = useContext(ArticlesContext)
    const [tag, setTag] = useState('')

    //AlertContext
    const alertContext = useContext(AlertContext);
    const { setAlert } = alertContext;

    let history = useHistory();
    const onchange = (e) => {
        return setTag(e.target.value);
    }

    const searchTagName = () => {
        if(tag === ''){
            setAlert('Please Enter a Tag' , 'danger')
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
