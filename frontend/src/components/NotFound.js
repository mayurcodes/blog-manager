import { Link } from 'react-router-dom';

const NotFound = () => {

    return(
        <div className = "not-found">
            <h2>Sorry!!</h2>
            <p>Page not found.</p><br />
            <Link to = "/">Back to Homepage</Link>
        </div>
    );
}

export default NotFound; 