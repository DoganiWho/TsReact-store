import { Row, Col } from "react-bootstrap"
import { StoreItem } from "../components/StoreItem"
// import getStoreItems from "../data/getStoreItems"
{/* TODO: 
  * get store items from fakestore-api
  * Work on Store page
*/}


export function Store() {

const storeItems = getStoreItems();

  return (
    <>
      <h1>Store</h1>
      <Row md={2} xs={1} lg={3} className="g-3">
        {/* {storeItems.map(item => {
          <Col key={item.id}>
            <StoreItem {...item} />
          </Col>
        })} */}
      </Row>
    </>
  );
}