import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
// import { fetchStoreItems, IProduct } from "../data/api";
import { useShoppingCart } from "../context/ShoppingCartContext"
// import '../styles/Pages.css'
// import './storeItems.css'
import axios from 'axios'

export function Details() {
  // const { increaseCartQty } = useShoppingCart()
  const { storeItemId } = useParams();
  const [product, setProduct] = useState('');

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${storeItemId}`)
      .then(res => {
        console.log(res.data.title)
        setProduct(res.data)
      })
    .catch(err => console.error(err))
    // fetchStoreItems()
    //   .then(data => setStoreItems(data))
    //   .catch(err => console.error(err));
  }, [])


  return (
    <div className="details-container">
    <img src={product.image} />
    <div className="container-info">
      <p>Name: {product.title}</p>
      <p>Price: {product.price}</p>
      <p>Description: {product?.description}</p>
    </div>
    </div>
  )
}