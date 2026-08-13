import axios, { AxiosInstance } from "axios"

export default class ApiService {

  private static api: AxiosInstance = axios.create({
    baseURL: 'https://dummyjson.com',
    timeout: 5000
  })


  static async getAllProducts(limit: number = 20, skip: number = 0) {

    try {
      const response = await this.api.get('/products?', {
        params: {
          limit: limit,
          skip: skip,
          select: 'title,description,price,discountPercentage,thumbnail',
        }
      });
      return response.data.products;
    } catch (error) {
      console.error("Falha ao carregar produtos", error);
      throw error;
    }
  }

  static async getProductById(id: string) {
    try {
      const response = await this.api.get(`/products/${id}`, {
        params: {
          select: 'title,description,price,discountPercentage,images,description,rating,stock,shippingInformation'
        }
      }
      );
      return response.data;
    } catch (error) {
      console.error(`Erro ao buscar produto ${id}:`, error);
      throw error;
    }
  }

  static async getMixedProducts(listLenght: number = 0) {

    const skipPerCategory = Math.floor(listLenght / 8);
    const categories = [
      "mens-shirts",
      "mens-shoes",
      "mens-watches",
      "womens-bags",
      "womens-dresses",
      "womens-jewellery",
      "womens-shoes",
      "womens-watches"];
    const limitPerCategory = 1;

    try {
      const allProducts = [];
      for (const category of categories) {
        const response = await this.api.get(`/products/category/${category}`, {
          params: {
            skip: skipPerCategory,
            limit: limitPerCategory,
            select: 'title,description,price,discountPercentage,thumbnail'
          }
        });

        allProducts.push(...response.data.products);
      }

      const shuffledProducts = allProducts.sort(() => Math.random() - 0.5);

      return shuffledProducts;

    } catch (error) {
      console.error("Falha ao carregar categorias mistas", error);
      throw error;
    }
  }

  static async getProductsByCategory(limit: number = 10, skip: number = 0, ...categories: string[]) {
    try {
      const allProducts = [];
      for (const category of categories) {
        const response = await this.api.get(`/products/category/${category}`, {
          params: {
            limit: limit,
            skip: skip,
            select: 'title,description,price,discountPercentage,thumbnail'
          }
        });

        allProducts.push(...response.data.products);
      }

      const shuffledProducts = allProducts.sort(() => Math.random() - 0.5);

      return shuffledProducts;


    } catch (error) {
      console.error(`Falha ao carregar categorias`, error);
      throw error;
    }
  }






}
