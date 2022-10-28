import './Navbar.css';
import { Link } from 'react-router-dom';

export const Navbar = () => {
    return (
        <div className="navbar">
            <h1><Link to='/'>RedditLite</Link></h1>
        </div>
    )
};