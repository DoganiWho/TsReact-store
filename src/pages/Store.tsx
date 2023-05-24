import { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { StoreItem } from "../components/StoreItem";
// import { storeItems } from "../data/items";

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
  const [loading, setLoading] = useState(false);
  const [storeItems, setStoreItems] = useState<IProduct[]>();
  const [query, setQuery] = useState('?limit=5');
  // const storeItems = [...data];
  
  useEffect(() => {
    setLoading(true);
    axios.get(`https://fakestoreapi.com/products${query}`)
    .then(res => setStoreItems(res.data))
    .catch(err => console.error(err))
    .finally(() => setLoading(false))
  }, []);

  return (  
    <>
      <h1>Store</h1>
      <Row md={2} xs={1} lg={3} className="g-3">
      {loading && "Loading..."}
      {storeItems?.map(item => {
        return (
          <Col key={item.id}>
            <StoreItem id={item.id} title={item.title} price={item.price} image={item.image} />
            {/* {JSON.stringify({...item})} */}
          </Col>
        )})
        // :
        // (<p>API did not provide any product, try again.</p>)
      }
      </Row>
    </>
  );
}