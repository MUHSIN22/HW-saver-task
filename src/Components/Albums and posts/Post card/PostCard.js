import React, { useEffect, useState } from 'react'
import './PostCard.scss';
import CommentCard from '../Comment card/CommentCard';
import { useHistory } from 'react-router';

export default function PostCard({ cardHeading, cardDescription,userId ,cardId ,album}) {
    const [ userProfile, setUserProfile ] = useState()
    const [ isComments, setIsComments] = useState(false)
    const [comments, setComments] = useState(null)
    const history = useHistory();

    useEffect(() =>{
        getCardDetails()
        getComments()
    },[])
    
    // Function for fetch the comments with cardID
    const getComments = () => {
        fetch("https://jsonplaceholder.typicode.com/comments")
        .then(res => res.json())
        .then( (data) => {
            setComments(data)
        })
    }

    // Function for fetch the card details
    const getCardDetails = () =>{
        fetch(`https://reqres.in/api/users/${userId}`)
        .then( res => res.json())
        .then( res => {
            setUserProfile(res.data)
        })
    }

    // Function for toggle comment visibiltiy
    const handleComments = () =>{
        setIsComments(!isComments);
        console.log(isComments);
    }

    return (
        <div className="post-card">
            {
                userProfile &&
                <div className="profile-section">
                    <img src={userProfile.avatar} className="avatar" alt="" />
                    <p className="username">{userProfile.first_name + " " +userProfile.last_name}</p>
                </div>
            }

            <h2>{cardHeading}</h2>
            <p>{cardDescription}</p>
            {
                album &&
                <button onClick={() => history.push(`/view-album/${cardId}`)} className="btn-album">View Album</button>
            }

            {
                !album && 
                <div className="comment-section">
                    <button onClick={handleComments}>{isComments?"Hide Comments":"Show Comments"}</button>
                </div>
            }
            
            {
                comments && isComments ?
                <>
                    {
                        comments.map((comment) =>(
                            <>
                                {
                                    comment.postId === cardId &&
                                    <CommentCard
                                        commentName={comment.name}
                                        commentBody={comment.body}
                                    />
                                }
                            </>
                        ))
                    }
                </> : null
            }
            
            
        </div>
    )
}
