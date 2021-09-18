import { Link } from "react-router-dom";

const BlogList = (props) => {
    const blog = props.item;
    const title = props.title;
    
    return (
        <div className="blog-list">
            <h2>{ title}</h2>
        {blog.map( (item) => (
            <div className="blog-preview" key = {item.id}> 
                <Link to = {`/blog/${item.id}`}>
                    <h3> {item.title} </h3>
                    <p> {item.author} </p>
                </Link>
            </div>
        ))}
        </div>
    );
}

export default BlogList;