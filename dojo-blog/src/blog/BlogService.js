import axios from 'axios';

const Blog_API_BASE_URL = 'http://localhost:8000/blogs/';

class BlogService {
  get(id = '') {
    if (typeof id === 'undefined' || id === null) id = '';
    return axios.get(Blog_API_BASE_URL + '/' + id);
  }

  create(blog) {
    return axios.post(Blog_API_BASE_URL, blog);
  }

  update(blog, id) {
    return axios.put(Blog_API_BASE_URL + '/' + id, blog);
  }

  delete(id) {
    return axios.delete(Blog_API_BASE_URL + '/' + id);
  }
}

export default new BlogService();
