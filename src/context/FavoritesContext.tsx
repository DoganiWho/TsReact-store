import { createContext, ReactNode, useContext, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { IProduct } from "../data/api";

type FavoritesProviderProps = {
  children: ReactNode
}

type FavoritesContext = {
  favorites: IProduct[]
  isFav: () => void
  addToFavorites: (id: number) => void
  removeFromFavorites: (id: number) => void
}

const FavoritesContext = createContext({} as FavoritesContext);

export function useFavorites() {
  return useContext(FavoritesContext)
}

export function FavoritesContextProvider({ children }: FavoritesProviderProps ){
    //create the global state
    const [favorites, setFavorites] = useLocalStorage<IProduct[]>(
    "favorites", []
   )

  // const isFav = () => setIsFavorite(!isFavorite)

    function addToFavorites (id: number)  {
      setFavorites(currFavs => {
        if (currFavs.find(item => item.id === id) == null) {
          return [...currFavs, {id} ]
        } else {
          return currFavs.map(item => {
            if (item.id === id) {
              return {...item }
            } else { 
              return item 
            }
          })
        }
      })
    }
  
    function removeFromFavorites(id: number) {
      setFavorites(currFavs => {
        return currFavs.filter(item => item.id !== id)
      })
    }
    
  return(
      <FavoritesContext.Provider value={{ favorites, addToFavorites, removeFromFavorites}} >
          {children}
      </FavoritesContext.Provider>
  )
}