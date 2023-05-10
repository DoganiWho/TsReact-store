import { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { StoreItem } from "../components/StoreItem";
import axios from 'axios';

export function Store() {  
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState(null)
  const filter = '?limit=5'
        
  useEffect(() => {
    setLoading(true);
    axios.get(`https://fakestoreapi.com/products${filter}`)
    .then(res => setData(res.data))
    .catch(err => console.error(err))
    .finally(() => setLoading(false))
  }, []);

  return (  
    <>
      <h1>Store</h1>
      <Row md={2} xs={1} lg={3} className="g-3">
      {loading && "Loading..."}
      {!!data && data.length > 0 ? data.map(item => {
        return (
          <Col key={item.id}>
            <StoreItem {...item} />
            <div 
              className="bg-white" 
              style={{
                border: "1px solid",
                padding: ".5rem", 
                width: "400px"
              }}
            >
              <p>{item.title}</p>
              <img src={item.image} width={100}/>
              <p>Price: ${item.price}</p>
            </div>
            {/* {JSON.stringify({item})} */}
          </Col>
        );
      }):(<p>API did not provide any product, try again.</p>)
      }
      </Row>
    </>
  );
}