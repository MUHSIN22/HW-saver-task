import React from 'react'
import AlbumsAndPost from './Albums and posts/AlbumsAndPost'
import Landing from './LandingPage/Landing'
import Navbar from './Navbar/Navbar'

export default function r() {
    return (
        <>
            <Landing/>
            <Navbar/>
            <AlbumsAndPost/>
        </>
    )
}
