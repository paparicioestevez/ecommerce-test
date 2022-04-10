import { Rest } from '../Helper/Rest';

export default class Product {

    async all() {
        try {
            const uri = '/api/product';
            const options = {
                method: "GET"
            };

            const response = await Rest(uri, options);
            if (response.status === 200) {
                const responseJson = await response.json();
                return responseJson;
            } else {
                return console.error("Error obteniendo productos");
            }
        } catch (error) {
            throw error;
        }
    }
}
