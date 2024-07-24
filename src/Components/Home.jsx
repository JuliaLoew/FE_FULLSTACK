import {useState , useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

const Home = () => {
  const [post, setPost] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
    .get('http://localhost:3000/posts')
    .then((response) => {
      setPost(response.data);
    })
    .catch((error) => {
      setError(error.message);
    });
  }, []);


    return (
      <div className='container mx-auto p-4'>
        <h1 className='text-3xl font-bold p-4'>All Blog Posts</h1>
        {error && <p className='text-red-500'>{error}</p>}
        {post.map((post) => (
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
            <div key={post.id} className='card bg-base-100 shadow-md'>
              <figure>
                <img src={post.cover} alt={post.title} />
              </figure>

              <div className='card-body'>
                <h2 className='card-title'>
                  {post.title}
                </h2>
                <p>
                  {post.content.substring(0, 100)}...
                </p>
                <div className='card-actions justify-end'>
                  <button className='btn btn-primary'>
                    <Link to={`/posts/${post.id}`}>Read More</Link>
                    </button>
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>
    );
  };
  
  export default Home;