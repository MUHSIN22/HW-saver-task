import React, { useEffect, useState } from 'react'
import './Landing.scss'

export default function Landing() {
    const [bgImage,setBgImage] = useState(null)
    
    const { 
        REACT_APP_NASA_API_KEY
     } = process.env

    useEffect(()=>{
        getBackgroundImage()
        handleBackground()
    },[])

    const handleBackground = () =>{
        let landingSection = document.querySelector('.landing-section')
        console.log(bgImage);
        if(bgImage != null && bgImage.media_type === 'image'){
            landingSection.style.backgroundImage = `url(${bgImage.url})`    
        }else{
            landingSection.style.backgroundImage = `url("/images/landingDefault.jpg")`
        }
    }

    const getBackgroundImage = () =>{
         fetch(`https://api.nasa.gov/planetary/apod?api_key=${REACT_APP_NASA_API_KEY}`)
        .then(res => res.json())
        .then(data =>{
            setBgImage({
                url:data.url,
                media_type:data.media_type
            })
        })
    }
    return (
        <main className="landing-section">
            <div className="landing-wrapper">
                <h1>Lorem Ipsum</h1>
                <p>10490+ Lorem Ipsum in the world</p>
            </div>
        </main>
    )
}
