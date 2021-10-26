import React, { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router'
import actions from '../../Assets/Actions'
import './AlbumView.scss'

export default function AlbumView() {
    const [ firstColumn, setFirstColumn ] = useState(null)
    const [ secondColumn, setSecondColumn ] = useState(null)
    const [ thirdColumn, setThirdColumn ] = useState(null)
    const { id } = useParams();
    const dispatch = useDispatch();

    useEffect(() =>{
        fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${id}`)
        .then(res => res.json())
        .then(albums => {
            let album1 = albums
            let album2 = album1.splice(Math.round(album1.length - album1.length/3))
            let album3 = album1.splice(album1.length/2)
            console.log(album2.length,album3.length,album1.length);
            setFirstColumn(album3)
            setSecondColumn(album2)
            setThirdColumn(album1)
        })
        dispatch(actions.toggleSection())
        return ()=>(
            dispatch(actions.toggleSection())
        )
    },[])


    return (
        <div className="album-view-section">
            <div className="album-view-section-wrapper">
                <div className="first-column-album">
                    {
                        firstColumn&&
                        firstColumn.map(item => (
                            <img src={item.url} key={item.id} alt="" />
                        ))
                    }
                </div>
                <div className="second-column-album">
                    {
                        secondColumn&&
                        secondColumn.map(item => (
                            <img src={item.url} key={item.id} alt="" />
                        ))
                    }
                </div>
                <div className="third-column-album">
                    {
                        thirdColumn&&
                        thirdColumn.map(item => (
                            <img src={item.url} key={item.id} alt="" />
                        ))
                    }
                </div>
            </div>            
        </div>
    )
}
