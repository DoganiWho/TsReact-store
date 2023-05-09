async function getStoreItems() {
  fetch('https://fakestoreapi.com/products/1')
    .then(res => res.json())
    .then((json) => console.log(json));
}

export default getStoreItems;