import { useState } from 'react';
import { toast, ToastContainer ,Bounce,Slide} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './Home.jsx';
const Create = () => {
  const [showHome, setShowHome] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    cover: "",
    author: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
    await fetch("http://localhost:3000/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
      toast.success("Post created successfully!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
        });
      setShowHome(true);
    }catch (error) {
      toast.error('Error with creating the Post', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
        });
    }
  };

  return (
    <div>
              <ToastContainer
                  position="top-right"
                  autoClose={5000}
                  hideProgressBar={false}
                  newestOnTop={false}
                  closeOnClick
                  rtl={false}
                  pauseOnFocusLoss
                  draggable
                  pauseOnHover
                  theme="light"
                  transition: Bounce
                />
      {showHome ? <Home/> :
      <form onSubmit={handleSubmit}>
        <h1 className="text-2xl font-bold mb-3">Create a new post</h1>
        <label className="input input-bordered flex items-center gap-2 mb-3">
          Title
          <input 
            type="text" 
            name="title" 
            value={formData.title || ""} 
            onChange={handleChange} 
            className="grow"
            required
          />
        </label>
        <label className="input input-bordered flex items-center gap-2 mb-3">
          Author
          <input 
            type="text" 
            name="author" 
            value={formData.author || ""} 
            onChange={handleChange} 
            className="grow"
            required
          />
        </label>
        <label className="input input-bordered flex items-center gap-2 mb-3">
          Image Link
          <input 
            type="text" 
            name="cover" 
            value={formData.cover || ""} 
            onChange={handleChange} 
            className="grow"
            required
          />
        </label>
        <label className="input input-bordered flex items-center gap-2 mb-3">
          Content
          <textarea
            className="textarea textarea-bordered textarea-xs w-full max-w-xs" 
            name="content" 
            value={formData.content || ""} 
            onChange={handleChange} 
            required
          ></textarea>
        </label>
        <button type="submit" className="btn">Submit</button>
      </form>
      }
    </div>
  );
};

export default Create;
