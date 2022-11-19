import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useFetch from '../useFetch';

const BlogDetails = () => {
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('mario');
  const {
    data: blog,
    error,
    isPending,
  } = useFetch('http://localhost:8000/blogs/' + id);
  //   .then((data) => {
  //     if (data) {
  //       setTitle(data.title);
  //       setBody(data.body);
  //       setAuthor(data.author);
  //     }
  //   });
  const navigate = useNavigate();

  const handleSubmit = () => {
    const blog = { title, body, author };
    fetch('http://localhost:8000/blogs/' + blog.id, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(blog),
    }).then(() => {
      navigate('/');
    });
  };

  return (
    <div className='create'>
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article>
          <h2>Edit Blog</h2>
          <form onSubmit={handleSubmit}>
            <label>Blog title:</label>
            <input
              type='text'
              required
              value={blog.title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <label>Blog body:</label>
            <textarea
              required
              value={blog.body}
              onChange={(e) => setBody(e.target.value)}
            ></textarea>
            <label>Blog author:</label>
            <select
              value={blog.author}
              onChange={(e) => setAuthor(e.target.value)}
            >
              <option value='mario'>mario</option>
              <option value='yoshi'>yoshi</option>
            </select>
            <button>Update</button>
          </form>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
