import { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { StoreItem } from "../components/StoreItem";
// import { storeItems } from "../data/items";

import axios from 'axios';

export function Store() {  
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [query, setQuery] = useState('?limit=5');
  const storeItems = [...data];
  
  useEffect(() => {
    setLoading(true);
    axios.get(`https://fakestoreapi.com/products${query}`)
    .then(res => setData(res.data))
    .catch(err => console.error(err))
    .finally(() => setLoading(false))
  }, []);

  return (  
    <>
      <h1>Store</h1>
      <Row md={2} xs={1} lg={3} className="g-3">
      {loading && "Loading..."}
      {!!data && storeItems.length > 0 ? storeItems.map(item => {
        return (
          <Col key={item.id}>
            {/* <StoreItem {...item} /> */}
            {/* {JSON.stringify({...item})} */}
            <img src={item.image} width="100px" />
          </Col>
        )}):(<p>API did not provide any product, try again.</p>)
      }
      </Row>
    </>
  );
}