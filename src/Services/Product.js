import { Rest } from "../Helper/Rest";

export default class Product {
  async all() {
    const uri = "/api/product";
    const options = {
      method: "GET"
    };

    const response = await Rest(uri, options);
    if (response.status === 200) {
      const responseJson = await response.json();
      return responseJson;
    } else {
      console.error("Error obteniendo productos");
    }
  }

  async details(id) {
    const uri = `/api/product/${id}`;
    const options = {
      method: "GET"
    };

    const response = await Rest(uri, options);
    if (response.status === 200) {
      const responseJson = await response.json();
      return responseJson;
    } else {
      console.error("Error obteniendo detalle del producto");
    }
  }

  async add(id, colorCode, storageCode) {
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({ colorCode, id, storageCode });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw
    };

    const uri = `/api/cart`;

    const response = await Rest(uri, requestOptions);
    if (response.status === 200) {
      const responseJson = await response.json();
      return responseJson;
    } else {
      console.error("Error añadiendo producto a la cesta");
    }
  }
}
