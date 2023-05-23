import axios from "axios";
  
export async function getItems(query:string) {
  const storeItems = await axios.get(`https://fakestoreapi.com/products${query}`)
    .then(res => res.data)
    .catch(err => console.error(err))
  return storeItems
} 


// export const storeItems = async (query:string) => {
//    await axios.get(`https://fakestoreapi.com/products${query}`)
//     .then(res => res.data)
//     .catch(err => console.error(err))
// }