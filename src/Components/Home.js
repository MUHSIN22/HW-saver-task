import React from 'react'
import AlbumView from './Album view/AlbumView'
import AlbumsAndPost from './Albums and posts/AlbumsAndPost'
import Landing from './LandingPage/Landing'
import Navbar from './Navbar/Navbar'
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom'
import { useSelector } from 'react-redux'
import ImageSection from './ImageSection/ImageSection'

export default function Home() {
    const isSectionVisible = useSelector(state => state.isSectionVisible)

    return (
        <>
            <Landing/>
            <Navbar/>
            {
                isSectionVisible &&
                <AlbumsAndPost/> 
            }
            <Router>
                <Switch>
                    <Route path="/view-albums/:id">
                        <AlbumView/>
                    </Route>
                    <Route path="/images">
                        <ImageSection/>
                    </Route>
                </Switch>
            </Router>
        </>
    )
}
