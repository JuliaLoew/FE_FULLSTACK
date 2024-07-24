import {useState , useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
    .get('http://localhost:3000')
    .then((response) => {
      setPosts(response.data);
    })
    .catch((error) => {
      setError(error.message);
    });
  }, []);


    return (
      <div className='container mx-auto p-4'>
        <h1 className='text-3xl font-bold p-4'>All Blog Posts</h1>
        {error && <p className='text-red-500'>{error}</p>}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
        {posts.map((posts) => (
          <div key={posts.id} className='card bg-base-100 shadow-md'>
            <figure>
              <img src={posts.cover} alt={posts.title} />
            </figure>

            <div className='card-body'>
              <h2 className='card-title'>
                {posts.title}
              </h2>
              <p>
                {posts.content.substring(0, 100)}...
              </p>
              <div className='card-actions justify-end'>
                <button className='btn btn-primary'>
                  <Link to={`/posts/${posts.id}`}>Read More</Link>
                  </button>
              </div>
            </div>
          </div>
        ))}
        </div>
      </div>
    );
  };
  
  export default Home;