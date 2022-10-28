import './Comment.css'
import { Link } from 'react-router-dom';

export const Comment = (comment) => {
    const data = comment;
    const dateCreated = new Date(data.date * 1000).toLocaleDateString('en-UK');
    return (
        <div className='card'>
            <p>Comment by u/<Link to={`../users/${data.user}`}>{data.user}</Link></p>
            <h3>{data.body}</h3>
            <div className='post-details'>
                <p>{data.ups} likes</p>
                <p>{dateCreated}</p> 
            </div>
        </div>
    )
};