import React, { useEffect, useState } from 'react'
import PostCard from '../Post card/PostCard'
import './Albums.scss'

export default function Albums() {
    const [ albumData, setAlbumData ] = useState()
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/albums")
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            setAlbumData(data)
        })
    }, [])
    return (
        <section className="albums-section">
            {
                albumData &&
                albumData.map(album => (
                    <PostCard
                        cardHeading={album.title}
                        userId={album.userId}
                        cardId={album.id}
                        album={true}
                    />
                ))
            }
        </section>
    )
}
