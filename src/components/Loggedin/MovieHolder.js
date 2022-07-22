import React from 'react'

const MovieHolder = ({ items, setComponent, movieSetter }) => {

    const baseurl = "https://image.tmdb.org/t/p/original"

    const setItem = (itemid) => {
        movieSetter(itemid)
        setComponent({
            homeShown: false,
            searchShown: false,
            showsShown: false,
            moviesShown: true,
        })
    }

    return (
        <div className='slider'>

            {items.map(item => (
                <div key={`movie${item.id}`} className='item' onClick={() => setItem(item.id)}>
                    <img className='item-poster-slider' src={baseurl + item['poster_path']} alt='movieimage'></img>
                    <h3 className='titles-slider'>{item['title']}</h3>
                </div>
            ))}
        </div>
    )
}

export default MovieHolder