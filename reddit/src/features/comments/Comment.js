import './Comment.css'
import { Link } from 'react-router-dom';

export const Comment = (comment) => {
    const data = comment;
    const dateCreated = new Date(data.date * 1000).toLocaleDateString('en-UK');
    const timeCreated = new Date(data.date * 1000).toLocaleTimeString('en-UK', { timeStyle: 'short' });
    
    return (
        <div className='card'>
            <h3>Comment by u/<Link to={`../users/${data.user}`}>{data.user}</Link></h3>
            <p>{data.body}</p>
            <div className='post-details'>
                <h3>{data.ups} likes</h3>
                <h3>{dateCreated} at {timeCreated}</h3> 
            </div>
        </div>
    )
};