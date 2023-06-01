
import { StoreItem } from '../components/StoreItem'
import { useFavorites } from '../context/FavoritesContext'
import { useTheme } from '../context/ThemeContext'
// import '../styles/Pages.css'
// import './Favorites.css'

export function Favorites() {

  //use global state for darkMode
  //NOTE {} not []
  const {darkMode, setDarkMode} = useTheme()

    //change to use global state
  //NOTE {} not []
  const {favorites} = useFavorites()
  return (
    <div className={darkMode?"favorites-container favorites-dark"  :"favorites-container"}>
      <h1> My Favorite Products</h1>
      <div className="favorite-products">
        {
            // favorites.map(item=><p>{item.name}</p>)
            favorites.length > 0 ?
            favorites.map ((item => <StoreItem key={item.id} product={item} />))
            :
            <p>No favorites selected yet</p>
        }
        </div>
    </div>
  )
}