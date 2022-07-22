import React from 'react'

const SearchHolder = ({ items, setComponent, movieSetter, showSetter }) => {

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
        <div className='items'>
            {Object.keys(items).length > 0 ? items.data['results'].map(item => (
                <div key={item['id']} className='search-item'>
                    <img className='item-poster' src={item['poster_path'] ? baseurl + item['poster_path'] : baseurl + item['backdrop_path']} alt='movieimage' onClick={() => setItem(item, item['id'])}></img>
                    <h3 className='titles'>{item['title'] ? item['title'] : item['original_name']}</h3>
                </div>
            )) : ''}
        </div>
    )
}

export default SearchHolder