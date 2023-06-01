import React from 'react'
// import './styles/Components.css'
// import './Search.css'
import axios from 'axios'

function Search({setProducts}) {
    //need state to hold user input
    const [query, setQuery] = React.useState('')

    //https://fakestoreapi.com/products/

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(query)

        //need to make api call to filter
        axios.get(`https://fakestoreapi.com/products/${query}`)
        .then(res =>{
            console.log(res.data.results)
            setProducts(res.data.results)
        })
        .catch(err => {
          if (err.response.status === 404){
            alert(`Could not find product named ${query}`)
          }
          else{
            console.log(err)
          }
        })

        //clear textbox
        setQuery('')

    }

  return (
    <form className="search-container" onSubmit={handleSubmit}>
        <input type="text" value={query}
               placeholder="Search all products"
               onChange={(e)=>setQuery(e.target.value)} />

    </form>
  )
}

export default Search