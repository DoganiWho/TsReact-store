import { useState, useEffect } from "react";
import { Row, Col, Button } from "react-bootstrap";
import { StoreItem } from "../components/StoreItem";
import { fetchStoreItems, IProduct } from "../data/api";
import axios from "axios";

export function Store() {  
  const [storeItems, setStoreItems] = useState<IProduct[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  // const [selectedCategory, setSelectedCategory] = useState('')
  // const [query, setQuery] = useState('?limit=5');

  useEffect(() => {
    // Get categories
    axios.get("https://fakestoreapi.com/products/categories")
      .then(res => setCategories(["all", ...res.data]))
      .catch(err => console.log(err))

    // Get all products
    fetchStoreItems()
      .then(data => setStoreItems(data))
      .catch(err => console.error(err));

    /* 
    * using IIFE to fetch all products
    (async () => {
      const data: IProduct = await fetch("https://fakestoreapi.com/products")
        .then(res => { return res.json()})
      return setStoreItems(data);
    })();
    */
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
    console.log(`category is ${category}`)
    
    fetchStoreItems(category)
      .then(data => setStoreItems(data))
      .catch(err => console.error(err));
  }

  return (  
    <>
      <h1>Store</h1>
      <Row md={2} xs={1} lg={3} className="g-3"> 
        <div
          className="d-flex align-items-center justify-content-between"
          style={{ gap: ".5rem" }}
        >
          {categories.map((item, index) => (
            <Button 
              key={index}
              variant="primary"
              onClick={() => filterStoreItems(item)}
            >
              {item}
            </Button>
          ))}
        </div>
      </Row>
      <Row md={2} xs={1} lg={3} className="g-3">
        {storeItems.map(item => (
          <Col key={item.id}>
            <StoreItem id={item.id} title={item.title} price={item.price} image={item.image} />
          </Col>
        ))}
      </Row>
    </>
  );
}
