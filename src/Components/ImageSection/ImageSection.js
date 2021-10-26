import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import actions from '../../Assets/Actions';
import './ImageSection.scss'

export default function ImageSection() {
    const [ photos ,setPhotos ] = useState(null)
    const dispatch = useDispatch();
    const [resultText,setResultText] = useState(null)
    const { 
        REACT_APP_UNSPLASH_API_KEY
    } = process.env

    useEffect(()=>{
        getPhotos()
        dispatch(actions.toggleSection())
        return () =>{
            dispatch(actions.toggleSection())
        }
    },[])
    
    // Function for fetch the photos
    const getPhotos = () =>{
        fetch(`https://api.unsplash.com/photos/?client_id=${REACT_APP_UNSPLASH_API_KEY}&per_page=100`)
        .then(res => res.json())
        .then(photos => {
            let photo1 = photos
            let photo2 = photos.splice(photo1.length - photo1.length/3)
            let photo3 = photos.splice(photo1.length/2)
            setPhotos([photo1,photo2,photo3])
        })
    }

    // funtction for searchImage
    const handleSubmit = (event) =>{
        event.preventDefault()
        let query = document.querySelector('.search-field').value
        setResultText(`Result for ${query}...`)
        fetch(`https://api.unsplash.com/search/photos/?client_id=${REACT_APP_UNSPLASH_API_KEY}&per_page=100&query=${query}`)
        .then(res => res.json())
        .then(data =>{
            let photos = data.results
            let photo1 = photos
            let photo2 = photos.splice(photo1.length - photo1.length/3)
            let photo3 = photos.splice(photo1.length/2)
            setPhotos([photo1,photo2,photo3])
        })
    }
    return (
        <div className="image-section">
            <form className="search-bar" onSubmit={handleSubmit}>
                <input type="search" className="search-field" placeholder="Search for photos..." />
                <input type="submit" value="Search" />
            </form>
            <h1 className="result">{resultText}</h1>
            <div className="image-section-wrapper">
                <div className="first-column-images">
                    {
                        photos && 
                        photos[0].map(photo => (
                                <img key={photo.id} src={photo.urls.small} alt="" /> 
                        ))
                    }
                </div>

                <div className="second-column-images">
                    {
                        photos && 
                        photos[1].map(photo => (
                                <img key={photo.id}  src={photo.urls.small} alt="" />
                        ))
                    }
                </div>
                <div className="third-column-images">
                    {
                        photos && 
                        photos[2].map(photo => (
                                <img key={photo.id} src={photo.urls.small} alt="" />
                        ))
                    }

                </div>
            </div>            
        </div>
    )
}
