import { Product } from "./Product";

export class ProductList {

    list: Product[] = [];

    constructor(...products: Product[]) {
        for (let product of products) {
            this.list.push(product);
        }
    }

    productFilter<K extends keyof Product>(key: K, value: Product[K]): Product[] {
        return this.list.filter(product => product[key] === value);
    }

    filterByValueRange(min: number, max: number): Product[] {
        return this.list.filter(product => product.value >= min && product.value <= max);
    }

}