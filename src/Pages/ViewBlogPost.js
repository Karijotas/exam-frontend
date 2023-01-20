
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export function ViewBlogPost() {
    const [blog, setBlog] = useState([]);
    const [comment, setComment] = useState([]);

    const params = useParams();
    

    useEffect(() => {
        fetch('/blogger/' + params.id)
            .then((response) => response.json())
            .then(setBlog)
    }, [params.id]);
   
    useEffect(() => {
        fetch('/comment/' + params.id)
            .then((response) => response.json())
            .then(setComment)
    }, [params.id]);
    return (<div>
        
                
                  <div key={blog.id}>
                    <h3>{blog.name}</h3>
                       <h5>Publikuota: {blog.createdDate} </h5>
                        <p>{blog.contents}</p>
                        
                    
                 </div>
                 <Link to={"/comment/" + blog.id}><button>Komentuoti</button></Link>

                 <div key={comment.id}>
                    <h4>comments</h4>
                    <p>{comment.id}</p>
                    <p>{comment.name}</p>
                    <p>{comment.contents}</p>
                 </div>
                
    </div>);
}