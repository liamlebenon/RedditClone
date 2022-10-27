import './Post.css';
import { Link } from 'react-router-dom';

export const Post = (post) => {
    const data = post.post;
    return (
        <div className='card'>
            {console.log(data)}
            <div className="right-size">
                <div className='post-details'>
                    <p className='subreddit'>r/{data.subreddit}</p>
                    <p className='author'>posted by u/<Link to={`users/${data.author}`}>{data.author}</Link></p>
                </div>
                <h3 className='post-title'>{data.title}</h3>
                <p className='post-body'>{data.selftext}</p>
                {data.post_hint === 'image' ? 
                <img alt={data.title} src={data.url} height={data.preview.images[0].resolutions[1].height} width={data.preview.images[0].resolutions[1].width}></img>
                    :
                    null
                }
                <div className='user-interactivity post-details'>
                    <p><Link to={`comments${data.permalink}`}>{data.num_comments.toLocaleString()} comments</Link></p>
                    <p>{data.ups.toLocaleString()} upvotes</p>
                </div>            
            </div>
            
        </div>
    )
}