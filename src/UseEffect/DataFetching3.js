import React,{useState,useEffect} from 'react'
import axios from 'axios'

function DataFetching3() {

    const [post,setPost] = useState({})
    const [id, setId] = useState(1)
    const [idFromButtonClick, setIdFromButtonClick] = useState(1)

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res=>{
            console.log(res)
            setPost(res.data)
        })
    
        .catch(err=>{
            console.log(err)
        })
    },[idFromButtonClick])

    const handleClick = ()=>{
        setIdFromButtonClick(id)
    }

  return (
    <div>
        <input type='text' value={id} onChange={e=>setId(e.target.value)} />
        <button type='button' onClick={handleClick}>FetchPost</button>
        <div>{post.title}</div>
    </div>
  )
}

export default DataFetching3

