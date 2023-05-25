import { useState, useEffect } from "react";
import { Row, Col, Button } from "react-bootstrap";
import { StoreItem } from "../components/StoreItem";

type IProduct = {
  id: number,
  title: string,
  price: number,
  description: string,
  category: string,
  image: string,
}

import axios from 'axios';

export function Store() {  
  const [storeItems, setStoreItems] = useState<IProduct[]>();
  const [categories, setCategories] = useState([]);
  // const [selectedCategory, setSelectedCategory] = useState('')
  // const [query, setQuery] = useState('?limit=5');
  
  useEffect(() => {
    /* 
    * using IIFE to fetch all products
    // (async () => {
    //   const data: IProduct = await fetch("https://fakestoreapi.com/products")
    //     .then(res => { return res.json()})
    //   return setStoreItems(data);
    // })();
    */
    
    // get categories
    axios.get("https://fakestoreapi.com/products/categories")
      .then(res => setCategories(["all", ...res.data]))
      .catch(err => console.log(err))

    // get all products
    axios.get("https://fakestoreapi.com/products")
      .then(res => {
        setStoreItems(res.data)
      })
      .catch(err => console.error(err))
  }, []);

  /*
  * second useEffecct to get products
  *  default to all products when page loads
  *  re run if selectedcategory changes

    useEffect(
      () => {
        const url = selectedCategory === "all" ? "https://fakestoreapi.com/products" : `https://fakestoreapi.com/products/category/${selectedCategory}`

        axios.get(url)
        .then(res =>{
          console.log(res.data)
          setProducts(res.data)
        })
        .catch(err => console.log(err))

      }, [selectedCategory]
    ) 
    
    */

   const filterStoreItems = (category: string) => {
      console.log('category is ', category)

      const url = category==="all"?
      "https://fakestoreapi.com/products"
      :
      `https://fakestoreapi.com/products/category/${category}`

      axios.get(url)
        .then(res =>{
          // console.log(res.data)
          setStoreItems(res.data)
        })
        .catch(err => console.log(err))
        // .finally(console.log(storeItems))
    }

  return (  
    <>
      <h1>Store</h1>
      <Row md={2} xs={1} lg={3} className="g-3"> 
        {
          categories.map((item, index) => {
          return (
              <Button size="sm" className="g-1 d-flex align-items-center justify-content-center"
                key={index}
                onClick={()=>filterStoreItems(item)}
              >{item}</Button>
          )})
          // categories.map((item, index) => <button key={index}
          // onClick={()=>setSelectedCategory(item)}>{item}</button>)
        }
      </Row>
      <Row md={2} xs={1} lg={3} className="g-3">
      {storeItems?.map(item => {
        return (
          <Col key={item.id}>
            <StoreItem id={item.id} title={item.title} price={item.price} image={item.image} />
          </Col>
        )})
      }
      </Row>
    </>
  );
}