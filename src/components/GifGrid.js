import React, { useEffect, useState } from 'react'
import { GifGridItem } from './GifGridItem';


export const GifGrid = ({ categorry }) => {

    const [images, setImages] = useState([]);
     

    useEffect( () => {
        getGifs();
    },[])

   const getGifs = async() => {

        const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( categorry )}n&limit=3&api_key=7IzTCqSW3Wxt6wXVXYvS6yo3eqGGI2Dv`;
        const resp = await fetch( url );
        const { data } = await resp.json();

        const gifs = data.map( img => {
            return {
                 id: img.id,
                 title: img.title,
                 url: img.images.downsized_medium.url
                 
            }
        })
            
        // console.log(getGifs);
        setImages( gifs);
   }


    return (
        <>
            <h3>{ categorry }</h3>
            <div className="card-grid">

                        { 
                        images.map( img => (
                            <GifGridItem 
                                key={ img.id }
                                { ...img }
                            />
                        ))
                        }
                        
            </div>
        </>
    )
}
