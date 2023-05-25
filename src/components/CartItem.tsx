import { useState, useEffect } from "react"
import { Button, Stack } from "react-bootstrap"
import { useShoppingCart } from "../context/ShoppingCartContext"
import { formatCurrency } from "../utilities/formatCurrency"
import axios from "axios"

type CartItemProps = {
  id: number
  quantity: number
}

type IProduct = {
  id: number,
  title: string,
  price: number,
  description: string,
  category: string,
  image: string,
}

export function CartItem({ id, quantity }: CartItemProps) {
  const { removeFromCart } = useShoppingCart()

  const [storeItems, setStoreItems] = useState<IProduct[]>();

  useEffect(() => {
     axios.get("https://fakestoreapi.com/products")
      .then(res => setStoreItems(res.data))
      .catch(err => console.error(err))
  }, [])

  const item = storeItems?.find(i => i.id === id)
  if (item == null) return null

  return (
    <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
      <img
        src={item.image}
        style={{ width: "125px", height: "75px", objectFit: "cover" }}
      />
      <div className="me-auto">
        <div>
          {item.title}{" "}
          {quantity > 1 && (
            <span className="text-muted" style={{ fontSize: ".65rem" }}>
              x{quantity}
            </span>
          )}
        </div>
        <div className="text-muted" style={{ fontSize: ".75rem" }}>
          {formatCurrency(item.price)}
        </div>
      </div>
      <div> {formatCurrency(item.price * quantity)}</div>
      <Button
        variant="outline-danger"
        size="sm"
        onClick={() => removeFromCart(item.id)}
      >
        &times;
      </Button>
    </Stack>
  )
}