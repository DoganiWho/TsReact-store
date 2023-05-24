import { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
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
  const [query, setQuery] = useState('?limit=5');
  
  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products${query}`)
      .then(res => setStoreItems(res.data))
      .catch(err => console.error(err))
  }, []);

  return (  
    <>
      <h1>Store</h1>
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