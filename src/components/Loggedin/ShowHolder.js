import React from 'react'

const ShowHolder = ({ items, setComponent, showSetter }) => {

    const baseurl = "https://image.tmdb.org/t/p/original"

    const setItem = (itemid) => {
        console.log(itemid)
        showSetter(itemid)
        setComponent({
            homeShown: false,
            searchShown: false,
            showsShown: true,
            moviesShown: false,
        })
    }

    if (!items) {
        return <h1> Loading ....</h1>
    }

    return (
        <div className='slider'>
            {items.map(item => (
                <div key={`show${item.id}`} className='item' onClick={() => setItem(item.id)}>
                    <img className='item-poster-slider' src={baseurl + item['poster_path']} alt='movieimage'></img>
                    <h3 className='titles-slider'>{item['original_name']}</h3>
                </div>
            ))}
        </div>
    )
}

export default ShowHolder