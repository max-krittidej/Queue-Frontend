import React from "react";
import axios from  "axios";

export default function Get(){
    const baseUrl = "https://jsonplaceholder.typicode.com/posts/1";
    const[post,setPost]=React.useState(null);
    React.useEffect(()=>{
        axios.get(baseUrl).then((response)=>{
            setPost(response.data);
        })
    }, [])
    
    function createPost(){
        axios.post("https://jsonplaceholder.typicode.com/posts", {title: "Hello World!",body: "This is a new post"}).then((response)=>{
            setName(response.data.name)
        });
    }
    if (!post) return null 
    return (
        <div className="App">
            <h1>{post.title}</h1>
            <h2>{post.body}</h2>
            <button onClick= {createPost}>text </button>
        </div>
    )
}