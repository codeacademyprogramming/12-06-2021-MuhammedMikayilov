import {HttpClient} from "./HttpClient/index.js"

class ProductApi extends HttpClient {

    constructor(){
        super('https://private-anon-c7facb6c86-pizzaapp.apiary-mock.com')
    }

    getProductList(){
        return this.get('restaurants/10/menu?category=Pizza&orderBy=rank')
    }

}   


export const productList = new ProductApi();