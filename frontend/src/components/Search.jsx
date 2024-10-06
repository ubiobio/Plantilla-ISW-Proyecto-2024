import '@styles/search.css';

function Search({ value, onChange, placeholder }) {
    return (
        <div>
            <input
                type="text"
                className='search-input-table'
                value={value}
                onChange={onChange}
                placeholder={placeholder}
            />
        </div>
    )
}

export default Search;