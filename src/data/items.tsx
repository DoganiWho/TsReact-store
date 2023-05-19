import axios from "axios";
  
export async function getItems(query:string) {
  const storeItems = await axios.get(`https://fakestoreapi.com/products${query}`)
  return storeItems
} 