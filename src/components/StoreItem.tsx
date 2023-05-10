type StoreItemProps = {
  id: number,
  name: string,
  price: number,
  imageUrl: string,
};

export function StoreItem({id, name, price, imageUrl}: StoreItemProps) {
  return(
    <>
      <h3>Store Item</h3>
    </>
  );
}