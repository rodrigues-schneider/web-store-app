import axios, { AxiosInstance } from "axios"

export default class ApiService {

  /*
  Lista das informaçãoes requeridas, com base na API 'DammyJson'
  OBS.: Para manter a navegação leve NÃO RETORNA AS IMAGENS, SOMENTE THUMBNAIL
  */

  static allInfo: string = 'title,description,price,discountPercentage,thumbnail,stock,shippingInformation';

  static api: AxiosInstance = axios.create({
    baseURL: 'https://dummyjson.com',
    timeout: 5000
  })


  //Pega todos os Produtos
  static async getAllProducts(limit: number = 20, skip: number = 0) {


    try {
      const response = await this.api.get('/products?', {
        params: {
          limit: limit,
          skip: skip,
          select: this.allInfo,
        }
      });
      return response.data.products;
    } catch (error) {
      console.error("Falha ao carregar produtos", error);
      throw error;
    }
  }

  //Seleciona um produto específico à partir da ID
  static async getProductById(id: string) {
    try {
      const response = await this.api.get(`/products/${id}`, {
        params: {
          select: this.allInfo,
        }
      }
      );
      return response.data;
    } catch (error) {
      console.error(`Erro ao buscar produto ${id}:`, error);
      throw error;
    }
  }

  //Seleciona os Produtos baseando-se em categorias
  static async getProductsByCategory(limit: number = 10, skip: number = 0, ...categories: string[]) {
    try {
      const allProducts = [];
      for (const category of categories) {
        const response = await this.api.get(`/products/category/${category}`, {
          params: {
            limit: limit,
            skip: skip,
            select: this.allInfo,
          }
        });

        allProducts.push(...response.data.products);
      }

      return allProducts.sort(() => Math.random() - 0.5);

    } catch (error) {
      console.error(`Falha ao carregar categorias`, error);
      throw error;
    }
  }

  //Pega produtos de categorias específicas e mistura em uma unica página [Usado em HomeScreen]
  static async getMixedProducts(listLenght: number = 0) {

    const skipPerCategory = Math.floor(listLenght / 8);
    const categories: string[] = [
      "mens-shirts",
      "mens-shoes",
      "mens-watches",
      "womens-bags",
      "womens-dresses",
      "womens-jewellery",
      "womens-shoes",
      "womens-watches"];
    const limitPerCategory = 1;

    return await this.getProductsByCategory(limitPerCategory, skipPerCategory, ...categories)

  }

  /*Carrega somente as imagens do produto
  Usado ao abrir a pagina de detalhes, para deixar a navegação mais leve*/
  static async getImages (id: string | number){
    try {
      const response = await this.api.get(`/products/${id}`, {
        params: {
          select: 'images',
        }
      }
      );
      return response.data.images;
    } catch (error) {
      console.error(`Erro ao buscar imagens do produto ${id}:`, error);
      throw error;
    }

  }


}
