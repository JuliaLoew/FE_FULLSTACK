import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Details = ({id}) => {
  const [post, setPost] = useState(
    {
      id: "",
      title: "",
      content: "",
      cover: "",
      author: "",
    }
  );


const [loading, setLoading] = useState(true);
const [error, setError] = useState(false);
const [isEditing, setIsEditing] = useState(false);

const navigate = useNavigate();

useEffect(() => {
  const fetchData = async () => {
    try {
      const id = 17;
      console.log(`Fetching data for ID: ${id}`);
      const response = await fetch(`http://localhost:3000/posts/${id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
    
      if (response.ok) {
        const data = await response.json();
        setPost(data);
      } else {
        setError(true);
      }
    } catch (error) {
      console.error('Fehler beim Laden der Bücher:', error);
      setError(true);
    } finally {
      setLoading(false);
    }
    };
    fetchData();
      
}, [id]);

const handleDelete = async () => {
  try {
    const id = 17;
    const response = await fetch(`http://localhost:3000/posts/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      console.log('Post wurde gelöscht');
      navigate('/');
    } else {
      console.error('Fehler beim Löschen des Posts');
      alert('Fehler beim Löschen des Posts.');
    }
  } catch (error) {
    console.error('Fehler beim Löschen des Posts:', error);
  }
};


const handleUpdate = async (event) => {
 event.preventDefault();
 try {
  const id = 17;
  const response = await fetch(`http://localhost:3000/posts/${id}`, {
    method: 'PUT',
     headers: {
       "content-type": "application/json",
     },
    body: JSON.stringify(post),
  });
  if (response.ok) {
    console.log('Post wurde aktualisiert');
    setIsEditing(false);
  }else {
    console.error('Fehler beim Aktualisieren des Posts');
    alert('Fehler beim Aktualisieren des Posts.');
  }
} catch (error) {
  console.error('Fehler beim Aktualisieren des Posts:', error);
}
};

const handleChange = (event) => {
  const { name, value } = event.target;
  setPost((prevPost) => ({
    ...prevPost,
    [name]: value,
  }));
};




if (loading) {
  return <div>Lädt...</div>;
}

if (error) {
  return <div>Fehler beim Laden der Daten.</div>;
}

return (
  <div>
    <div className="card bg-base-100 w-96 shadow-xl">
  <figure>
    <img
      src={post.cover}
      alt={post.title} />
  </figure>
  <div className="card-body">


  {isEditing ? (
            <form onSubmit={handleUpdate}>
              <input
                type="text"
                name="title"
                value={post.title}
                onChange={handleChange}
                placeholder="Title"
                className="input input-bordered"
              />
              <input
                type="text"
                name="author"
                value={post.author}
                onChange={handleChange}
                placeholder="Author"
                className="input input-bordered"
              />
              <textarea
                name="content"
                value={post.content}
                onChange={handleChange}
                placeholder="Content"
                className="textarea textarea-bordered"
              />
              <input
                type="text"
                name="cover"
                value={post.cover}
                onChange={handleChange}
                placeholder="Cover URL"
                className="input input-bordered"
              />
              <button type="submit" className="btn btn-primary">Save</button>
            </form>
          ) : (
            <>

    
    <h2 className="card-title">{post.title}</h2>
    <h3 className="card-title">"Author:" {post.author}</h3>
    <p>{post.content}</p>
    <div className="card-actions justify-end">
      <button onClick={() => setIsEditing(true)} className="btn btn-primary">Update</button>
      <button onClick={handleDelete} className="btn btn-primary">Delete</button>
    </div>
    </>
          )}
        </div>
      </div>
    </div>
  );
};
export default Details;