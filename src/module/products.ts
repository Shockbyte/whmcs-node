import { AddProductRequest, AddProductResponse } from "../interface/products/add-product";
import { BaseModule } from "./base";

export class WhmcsProductsService extends BaseModule {
  
  public async addProduct(options: AddProductRequest): Promise<AddProductResponse> {
    return this.request('AddProduct', options);
  }

}