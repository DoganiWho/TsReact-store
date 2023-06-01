import { useTheme } from "../context/ThemeContext";

export function Footer() {

  const {darkMode, setDarkMode} = useTheme()
  
  return (
    <p 
      className="bg-white mb-0"
      style={{padding: "1rem"}}
    >
      Made for Fun by DoganiWho
    </p>
  )
}