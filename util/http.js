export async function getProducts({ id, signal }) {
  try {
    const url = "https://fakestoreapi.com/products";

    const response = await fetch(url, { signal });

    if (!response.ok) {
      throw new Error("Something went wrong");
    }

    const data = await response.json();

    return data;
  } catch (error) {
    throw new Error(error);
  }
}

export async function getHttpDetails({ id, signal }) {
  console.log(2, id);
  try {
    const url = `https://fakestoreapi.com/products/${id}`;
    let response;
    if (signal) {
      response = await fetch(url, { signal });
    }
    response = await fetch(url);

    if (!response.ok) {
      throw new Error("Something went wrong");
    }

    const data = await response.json();

    return data;
  } catch (error) {
    throw new Error(error);
  }
}
