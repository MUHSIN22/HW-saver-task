import React, { useEffect, useState } from 'react'
import PostCard from './Post card/PostCard'
import RecommendationPeople from './Recommendation people/RecommendationPeople'
import './AlbumsAndPost.scss'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Albums from './Albums/Albums'

export default function AlbumsAndPost() {
    const [ userData, setUserData ] = useState(null)
    const [recommendedUsers, setRecommendedUsers] = useState(false)

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res => res.json())
        .then(data =>{
            setUserData(data)
        })
        getRecommendedPeople();

    },[])

    // Function for fetch the recommendation people list
    const getRecommendedPeople = () => {
        fetch("https://reqres.in/api/users?page=2")
        .then(res => res.json())
        .then(users => {
            setRecommendedUsers(users.data)
        })
    }
    return (
        <section className="album-and-post-section">
            
            <Router>
                <Switch>
                    <Route path="/" exact>
                    <div className="post-card-wrapper">
                        {
                            userData &&
                            userData.map((data) => (
                                <PostCard 
                                    key={data.id}
                                    cardId={data.id}
                                    userId={data.userId}
                                    cardHeading={data.title}
                                    cardDescription={data.body}
                                />
                        )) 
                        }
                    </div>
                    </Route>
                    <Route path="/albums" exact>
                        <Albums/>
                    </Route>
                </Switch>
            </Router>

            
            <div className="recommendation">
                <div className="recommendation-wrapper">
                    <h6 className="recommend-head">Recommended for you</h6>
                    {
                        recommendedUsers &&
                        recommendedUsers.map((users) =>(
                            <RecommendationPeople
                                key={users.id}
                                name={users.first_name+" "+users.last_name}
                                image={users.avatar}
                            />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}
