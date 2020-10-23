import Button from '../Button'

function SearchBar ({ onClick, onChange }) {
  return (
    <div className='search-bar'>
      <div>
        <p className='search-bar_title'>Filter</p>
      </div>
      <div className='form-row'>
        <div className='search-bar_input'>
          <input type='text' name='filterInput' className='form-control' onChange={onChange} />
        </div>
        <div className='sear-bar_button'>
          <Button
            name='filter'
            onClick={onClick}
            className='btn btn-success search-bar_button'
          >
            Filter
          </Button>
        </div>
      </div>
    </div>
  )
}
export default SearchBar
