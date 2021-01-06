import React,{useState}from 'react'

function TagArea() {

    const [tag, setTag] = useState('')

    const onchange = (e) => {
        console.log("clicked");
        return setTag(e.target.value);
    }

    const searchTagName = () => {
        return console.log(tag)
    }
    return (
        <>
            <input type="text" className='form-control' onChange={onchange} name='tag' placeholder='Search By Tag...' value={tag}/>
            <button className='btn btn-danger' onClick = {searchTagName}> search </button>
        </>
    )
}

export default TagArea
