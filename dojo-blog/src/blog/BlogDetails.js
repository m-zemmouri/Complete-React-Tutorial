import { useNavigate, useParams, Link } from 'react-router-dom';
import useFetch from '../useFetch';
import BlogService from './BlogService';

const BlogDetails = () => {
  const { id } = useParams();
  const {
    data: blog,
    error,
    isPending,
  } = useFetch('http://localhost:8000/blogs/' + id);
  const navigate = useNavigate();

  const handleClick = () => {
    BlogService.delete(blog.id);
    navigate('/');
  };

  return (
    <div className='blog-details'>
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
          <div>{blog.body}</div>
          <button onClick={handleClick}>delete</button>
          <Link to={`/blog/edit/${blog.id}`}>Edit</Link>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
