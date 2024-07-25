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
      <div className='container mx-auto'>
        <h2 className='text-3xl font-bold py-4'>All E-Books</h2>
        {error && <p className='text-red-500'>{error}</p>}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
        {posts.map((posts) => (
          <div key={posts.id} className='card bg-base-100 shadow-md'>
            <figure>
              <img src={posts.cover} alt={posts.title} />
            </figure>

            <div className='card-body'>
              <h3 className='card-title'>
                {posts.title}
              </h3>
              <p>
                {posts.content.substring(0, 200)}...
              </p>
              <div className='card-actions justify-end'>
                <Link to={`/posts/${posts.id}`} className='btn btn-primary'>Read More</Link>
              </div>
            </div>
          </div>
        ))}
        </div>
      </div>
    );
  };
  
  export default Home;