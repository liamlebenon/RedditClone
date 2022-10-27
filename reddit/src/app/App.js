import './App.css';
import { Navbar } from '../components/Navbar'
import { Posts } from '../features/posts/Posts';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Posts />
    </div>
  );
}

export default App;
