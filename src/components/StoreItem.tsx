import { Button, Card } from "react-bootstrap"
import { useShoppingCart } from "../context/ShoppingCartContext"
import { formatCurrency } from "../utilities/formatCurrency"
import { useFavorites } from '../context/FavoritesContext';
import { Link } from 'react-router-dom'

type StoreItemProps = {
  id: number,
  title: string,
  price: number,
  image: string,
};

export function StoreItem({ id, title, price, image}: StoreItemProps) {
  const {
    getItemQty,
    increaseCartQty,
    decreaseCartQty,
    removeFromCart,
  } = useShoppingCart()
  const {favorites, addToFavorites, removeFromFavorites} = useFavorites()
  const quantity = getItemQty(id)
  // const [ isFavorite, setIsFavorite ] = useState(false)

  // useEffect(
  //   ()=>{
  //     //is this card in favorites?
  //     setIsFavorite(favorites?.find(item => item.id === id))
  //     console.log(isFavorite)
  //   }, [favorites]
  // )

  return (
    <Card className="h-100">
      <Card.Img
        variant="top"
        src={image}
        height="200px"
        style={{ objectFit: "contain" }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
          <span className="fs-3">{title}</span>
          <span className="ms-2 text-muted">{formatCurrency(price)}</span>
          <Link to={`/details/${id}`}>See Details</Link>
        </Card.Title>
        <div className="mt-auto">
          {quantity === 0 ? (
            <Button className="w-100" onClick={() => increaseCartQty(id)}>
              + Add To Cart
            </Button>
          ) : (
            <div
              className="d-flex align-items-center flex-column"
              style={{ gap: ".5rem" }}
            >
              <div
                className="d-flex align-items-center justify-content-center"
                style={{ gap: ".5rem" }}
              >
                <Button onClick={() => decreaseCartQty(id)}>-</Button>
                <div>
                  <span className="fs-3">{quantity}</span> in cart
                </div>
                <Button onClick={() => increaseCartQty(id)}>+</Button>
              </div>
              <Button
                onClick={() => removeFromCart(id)}
                variant="danger"
                size="sm"
              >
                Remove
              </Button>
            </div>
          )}
          {favorites ? <Button onClick={() => removeFromFavorites(id)}>💗</Button> : <Button onClick={() => addToFavorites(id)}>🤍</Button>}
        </div>
      </Card.Body>
    </Card>
  )
}