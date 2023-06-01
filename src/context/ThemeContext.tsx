import { createContext, ReactNode, useContext, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";


type ThemeProviderProps = {
  children: ReactNode
}

type ThemeContext = {
  darkMode: () => void
  setDarkMode: () => void
}

const ThemeContext = createContext({} as ThemeContext);

export function useTheme() {
  return useContext(ThemeContext)
}

export function ThemeContextProvider({ children }: ThemeProviderProps ){
    //create the global state
    const [darkMode, setDarkMode] = useLocalStorage('darkMode', [])


    return(
        <ThemeContext.Provider value={{ darkMode, setDarkMode }} >
            {children}
        </ThemeContext.Provider>
    )


}