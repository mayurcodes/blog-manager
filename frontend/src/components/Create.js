import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Create = () => {

    const [title, setTitle] = useState("");
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('maddy');
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, body, author}; 
        setIsPending(true);

        fetch('http://localhost:8000/blog', {

               method : "POST",
               headers : {"Content-Type": "application/json"},
               body : JSON.stringify(blog)
        }).then( () => {
                console.log("blog added");  
                setIsPending(false);
                // history.go(-1);
                history.push('/');
        });
    }

    return (
        <div className ="create">
            <h2>Add new blog here..</h2>
            <form onSubmit = {handleSubmit}>
                <label>Blog Title :</label>
                <input type = "text"
                       required
                       value = { title }
                       onChange = {(e) => setTitle(e.target.value)}>
                </input>
                <label>Blog body :</label>
                <textarea  required
                           value = { body }
                           onChange = { (e) => setBody(e.target.value)}>                       
                </textarea>
                <label>Blog author :</label>
                <select  value = { author }
                         onChange = { (e) => setAuthor(e.target.value)}>
                    <option value = "maddy">maddy</option>
                    <option value = "mario">mario</option>
                    <option value = "paddy">paddy</option>
                    <option value = "sandy">sandy</option>
                </select>
                { isPending && <button disabled>Adding...</button> }  
                { !isPending && <button>Add Blog</button> }  
            </form>
        </div>
    );
}

export default Create;