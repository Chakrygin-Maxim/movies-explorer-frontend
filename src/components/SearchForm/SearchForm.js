import "./SearchForm.css";

function SearchForm(props) {
  return (
    <div className='searchForm'>
      <input
        type='search'
        id='movie-search'
        className='searchForm__searchFild'
        placeholder='Фильм'
      ></input>
      <button className='searchForm__button'>Найти</button>
      <div className='searchForm__container'>
        <input type='checkbox' className='searchForm__checkbox' />
        <span className='searchForm__checkbox-text'>Короткометражки</span>
      </div>
      <div className='searchForm__underline' />
    </div>
  );
}

export default SearchForm;
