import React, { useState } from 'react'
import './RecommendationPeople.scss'

export default function RecommendationPeople({image, name}) {
    const [isFollowing,setFollowing] = useState(false)
    return (
        <div className="recommendation-people">
            <img src={image} alt="" />
            <p>{name}</p>
            <button 
                onClick={()=>{setFollowing(!isFollowing)}}
                className={isFollowing ? 'btn-follow-enabled':''}
            >
                {
                    isFollowing ? 
                    "Following"
                    :"Follow"
                }
            </button>
        </div>
    )
}
