import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import BlogCreate from './blog/BlogCreate';
import BlogDetails from './blog/BlogDetails';
import BlogEdit from './blog/BlogEdit';
import NotFound from './NotFound';

function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <div className='content'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/blog/list' element={<Home />} />
            <Route path='/blog/create' element={<BlogCreate />} />
            <Route path='/blog/edit/:id' element={<BlogEdit />} />
            <Route path='/blog/detail/:id' element={<BlogDetails />} />
            <Route path='/blog/:id' element={<BlogDetails />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
