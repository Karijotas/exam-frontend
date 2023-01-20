import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './FrontPage.css';


export function FrontPage() {
    const [blogPost, setBlogPosts] = useState([]);


    const reverse = () => {
        setBlogPosts([...blogPost].reverse())
    }


    const fetchBlogPosts = () => {
        fetch('/blogger')
            .then(response => response.json())
            .then(jsonResponse => setBlogPosts(jsonResponse))
            .then(response => console.log(response));
    };

    useEffect(() => {
        fetchBlogPosts();
    }, []);


    return (<div>
        <h2>Blog</h2>

        <button onClick={reverse}>Rikiuoti nuo naujausių / Seniausių įrašų</button>
        {blogPost.map(blogPost => (
            <div key={blogPost.id}>
                <h3>{blogPost.name}</h3>
                <h5>Publikuota: {blogPost.createdDate} </h5>
                <p>{blogPost.summary}</p>
                <Link to={"/view/" + blogPost.id}>  <button>Skaityti daugiau</button></Link>


            </div>
        ))}
    </div>);
}

