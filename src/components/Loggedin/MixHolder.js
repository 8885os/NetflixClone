import React from 'react'

const MixHolder = ({ items, setComponent, movieSetter, showSetter }) => {

    const baseurl = "https://image.tmdb.org/t/p/original"

    const setItem = (item, itemid) => {


        if (item['title']) {
            movieSetter(itemid)
            setComponent({
                homeShown: false,
                searchShown: false,
                showsShown: false,
                moviesShown: true,
            })
        }
        else if (item['original_name']) {
            showSetter(itemid)
            setComponent({
                homeShown: false,
                searchShown: false,
                showsShown: true,
                moviesShown: false,
            })
        }
        else {
            setComponent({
                homeShown: true,
                searchShown: false,
                showsShown: false,
                moviesShown: false,
            })

        }
    }

    return (
        <div className='slider'>
            {console.log(items)}
            {items.map(item => (
                <div key={`mix${item.id}`} className='item' >
                    <img className='item-poster-slider' src={baseurl + item['poster_path']} alt='movieimage' onClick={() => setItem(item, item.id)}></img>
                    <h3 className='titles-slider'>{item['title'] ? item['title'] : item['original_name']}</h3>
                </div>
            ))}
        </div>
    )
}

export default MixHolder