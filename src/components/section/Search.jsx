import React from 'react'

const Search = () => {
    return (
        <div id='search'>
            <div className='search__inner'>
                <label htmlFor='searchInput'>
                    <span className='ir'>Search</span>
                </label>
                <input 
                    type='search' 
                    id='searchInput' 
                    placeholder='検索するキーワードを入力してください' 
                    autoComplete='off' 
                    className='search__input' 
                />
            </div>
        </div>
    )
}
export default Search