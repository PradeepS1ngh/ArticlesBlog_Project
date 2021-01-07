import React,{useState , useContext} from 'react'
import { Redirect ,useHistory} from 'react-router-dom'
import AuthContext from '../../Context/Auth/AuthContext'
import ArticlesContext from '../../Context/Articles/ArticlesContext'


function CreateArticle() {

    const authContext = useContext(AuthContext);
    const { user } = authContext
    
    const articlesContext = useContext(ArticlesContext);

    let history = useHistory();

    const [article, setArticle] = useState({
        tagname : '',
        heading : '',
        desc : ''
    })

    const onsubmit = (e) => {
        e.preventDefault();
        if(tagname === '' || heading === '' || desc === ''){
            alert('Fill The Form');
        }else{
            articlesContext.createNewArticle({tagname,heading,desc,username : user.username});
            history.push('/');
        }
        
    }
    const {tagname , heading , desc} = article;

    const onchange = (e) => {setArticle({...article , [e.target.name] : e.target.value})}

    return (
        
        <div className='container register' style={{width:'40%' , marginTop:'10vh'}}>
        <h1 className='text-center'>Create New Article</h1>
        <form onSubmit={onsubmit}>
            <div className='m-lg-3'>
                <label htmlFor="tagname">Tag</label>
                <input className='form-control' type="text" name='tagname' value={tagname} onChange={onchange}/>
            </div>
            <div className='m-lg-3'>
                <label htmlFor="heading">Heading</label>
                <input className='form-control' type="text" name='heading' value={heading} onChange={onchange}/>
            </div>
            <div className='m-lg-3'>
                <label htmlFor="desc">Descriptions</label>
                <input className='form-control' type="text" name='desc' value={desc} onChange={onchange}/>
            </div>
            <button className='btn btn-primary w-100 m-lg-1'>Register</button>
        </form>
    </div>
    )
}

export default CreateArticle
