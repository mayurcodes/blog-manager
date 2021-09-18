import BlogList from './BlogList';
import useFetch from './useFetch';

function Home() {
    // here we just name the data as blog or we can change item value as data in return template.
    const { data : blog, isPending, error} = useFetch('http://localhost:8000/blog');

    return (
        <div className = "home">
            { error && <div> { error } </div> }
            { isPending && <div>Loading.....</div>}
            { blog && <BlogList item = {blog} title = 'All Blogs!' />}
        </div>
    );
}

export default Home;