import './Comment.css'
import { Link } from 'react-router-dom';

export const Comment = (comment) => {
    const data = comment;
    const dateCreated = new Date(data.date * 1000).toLocaleDateString('en-UK');
    return (
        <div className='card'>
            <h3>Comment by u/<Link to={`../users/${data.user}`}>{data.user}</Link></h3>
            <p>{data.body}</p>
            <div className='post-details'>
                <h3>{data.ups} likes</h3>
                <h3>{dateCreated}</h3> 
            </div>
        </div>
    )
};