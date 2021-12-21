import React,{useState} from 'react'

const SearchForm = () => {
   const [searchValue, setsearchValue] = useState('');
    const userSearch = async (event)=>{
        event.preventDefault() 
        console.log(searchValue)
        var searchAPI = 'https://maps.googleapis.com/maps/api/place/autocomplete/json?input='+searchValue+'&types=(cities)&key=AIzaSyBfn00jueDh2txxpLbyPoJS9Wtd-v4iEdA'
        try {
        const response = await fetch(searchAPI,{
         headers:{'content-type':'application/json'} 
        })
        if(!response.ok){
            throw new Error(response.error_message)
        }
        var results = await response.json()
        console.log(results)
        } catch(err){
        console.error(err)
        }
    }

  function onChange(event){
    setsearchValue(event.target.value)
    console.log(searchValue)
   }
   console.log(searchValue)
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <span class="container-fluid">
            <form class="d-flex" onSubmit={userSearch}>
              <input  onChange={(event)=>onChange(event)} className="searchForm form-control me-2 " value={searchValue} type="search" placeholder="Search City" aria-label="Search"></input>
              <button id="button2"className="searchForm"class="btn btn-outline-success" type="submit">Search</button>
            </form>
          </span>
      </nav>
    )
}


export default SearchForm
