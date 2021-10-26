import React from 'react'
import './CommentCard.scss'

export default function CommentCard({ commentName , commentBody }) {
    
    return (
        <div className="comment-card">
            <h6>{commentName}</h6>
            <p>{commentBody}</p>
        </div>
    )
}
