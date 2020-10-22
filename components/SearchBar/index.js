import Button from '../Button'

function SearchBar ({ onClick, onChange }) {
  return (
    <div className='search-bar'>
      <div>
        <p className='search-bar_title'>Filter</p>
      </div>
      <div className='form-row'>
        <div className='col-md-4'>
          <input type='text' name='filterInput' className='form-control' onChange={onChange} />
        </div>
        <div className='col-md-2'>
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
