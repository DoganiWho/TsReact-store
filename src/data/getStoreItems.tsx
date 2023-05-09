async function getStoreItems() {
  const data = await fetch('https://fakestoreapi.com/products/1')
    .then(res => res.json())
    .then((json) => console.log(json));
  return data
}

export default getStoreItems;