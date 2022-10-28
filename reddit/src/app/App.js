import './App.css';
import { Navbar } from '../components/Navbar'
import { Posts } from '../features/posts/Posts';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { UserProfile } from '../features/userProfile/UserProfile';
import { Comments } from '../features/comments/Comments';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Posts />} />
          <Route exact path='/users/:username' element={<UserProfile />} />
          <Route exact path='/comments/r/:subreddit/comments/:author/:permalink' element={<Comments />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
