import axios from 'axios';

export type IProduct = {
  id: number,
  title: string,
  price: number,
  description: string,
  category: string,
  image: string,
}

export async function fetchStoreItems(category: string = "all"): Promise<IProduct[]> {
  const url = category === "all"
    ? "https://fakestoreapi.com/products"
    : `https://fakestoreapi.com/products/category/${category}`;

  try {
    const response = await axios.get(url);
    return response.data;
  } catch (err) {
    console.error(err);
    return [];
  }
}
