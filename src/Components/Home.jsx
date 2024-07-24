import {useState , useEffect} from 'react';
import { Link } from "react-router-dom";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('htttp://localhost:3000/posts');
        if (!response.ok) {
          throw new Error(`${response.status} - Could not fetch posts.`);
        }
        const data = await response.json();
        setPosts(data);
      }
      catch (error) {
        setError(error.message);
    }
  };

    fetchPosts();
  }, []);

    return (
      <div className='container mx-auto p-4'>
        <h1 className='text-3xl font-bold p-4'>All Posts</h1>
        {error && <p className='text-red-500'>{error}</p>}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
          
          <div key={posts.id} className='card bg-base-100 shadow-md'>
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
                <button className='btn btn-primary'>Read More</button>
              </div>
            </div>

          </div>

        </div>
      </div>
    );
  };
  
  export default Home;