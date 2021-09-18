import { useHistory, useParams } from "react-router";
import useFetch from "./useFetch";

const BlogDetails = () => {

    const { id } = useParams();
    const { data : blog, error, isPending} = useFetch('http://localhost:8000/blog/' + id);
    const history = useHistory();

    const handleClickDelete = () => {
        fetch('http://localhost:8000/blog/' + blog.id, {

                method : "DELETE"
        }).then( () => {
            history.push("/");
        });                
    }

    return (
        <div className = "blog-details">
            { isPending && <div>Loading...</div> }
            { error && <div>{ error }</div> }
            { blog && ( <article>
                <h2>{blog.title}</h2>
                <small> Written by {blog.author}</small><br/><br/>
                <div>{blog.body}</div>
                <button onClick = {handleClickDelete}>delete</button>
            </article> )}
        </div>
    );
}

export default BlogDetails;