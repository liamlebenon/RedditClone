import './UserProfile.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserProfile, selectIsLoadingUserProfile, selectUserProfile } from './userProfileSlice';
import { useParams } from 'react-router-dom';
import { Spinner } from '../../components/Spinner';

export const UserProfile = () => {

    const isLoading = useSelector(selectIsLoadingUserProfile);
    const data = useSelector(selectUserProfile);
    const dispatch = useDispatch();
    const { username } = useParams();

    useEffect(() => {
        dispatch(fetchUserProfile(username));
        console.log(data);
    }, []);

    if (isLoading) {
        return (
            <div className='post-list spinner'>
                <Spinner />
            </div>
        )
    } else {
        const user = data.data;
        const dateCreated = new Date(user.created * 1000).toLocaleDateString('en-UK');

        return (
            <div className='post-list card'>
                <h2>u/{user.name}</h2>
                {user.snoovatar_img === '' ? 
                    <img alt='defaultimage' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg_wY3enOrX6JdeyW8nEnD6vWn0PMYEszp3vcWJ0fOd38h9SQIhfmGOvRyrpl1maWy8JY&usqp=CAU' width='190' height='300'/> 
                    : 
                    <img alt={user.name} src={user.snoovatar_img} width={user.snoovatar_size[0] / 2} height={user.snoovatar_size[1] / 2}/> 
                }
                
                <div className='user-info'>
                    <p>{user.comment_karma.toLocaleString()} karma</p>
                    <p>User since {dateCreated}</p>
                </div>
            </div>
        )
    }
};
