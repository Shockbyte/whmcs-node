import { BaseModule } from "./base"
import { AcceptOrderRequest, AcceptOrderResponse } from "../interface/orders/accept-order"
import { AddOrderRequest, AddOrderResponse } from "../interface/orders/add-order"
import { CancelOrderRequest, CancelOrderResponse } from "../interface/orders/cancel-order"
import { DeleteOrderRequest, DeleteOrderResponse } from "../interface/orders/delete-order"
import { FraudOrderRequest, FraudOrderResponse } from "../interface/orders/fraud-order"
import { GetOrderStatusesRequest, GetOrderStatusesResponse } from "../interface/orders/get-order-statuses"
import { GetOrdersRequest, GetOrdersResponse } from "../interface/orders/get-orders"
import { GetProductsRequest, GetProductsResponse } from "../interface/orders/get-products"
import { GetPromotionsRequest, GetPromotionsResponse } from "../interface/orders/get-promotions"
import { OrderFraudCheckRequest, OrderFraudCheckResponse } from "../interface/orders/order-fraud-check"
import { PendingOrderRequest, PendingOrderResponse } from "../interface/orders/pending-order"

export class WhmcsOrdersService extends BaseModule {

  public async acceptOrder(options: AcceptOrderRequest): Promise<AcceptOrderResponse> {
    return this.request('AcceptOrder', options)
  }

  public async addOrder(options: AddOrderRequest): Promise<AddOrderResponse> {
    return this.request('AddOrder', options)
  }

  public async cancelOrder(options: CancelOrderRequest): Promise<CancelOrderResponse> {
    return this.request('CancelOrder', options)
  }

  public async deleteOrder(options: DeleteOrderRequest): Promise<DeleteOrderResponse> {
    return this.request('DeleteOrder', options)
  }

  public async fraudOrder(options: FraudOrderRequest): Promise<FraudOrderResponse> {
    return this.request('FraudOrder', options)
  }

  public async getOrders(options: GetOrdersRequest): Promise<GetOrdersResponse> {
    return this.request('GetOrders', options)
  }

  public async getOrderStatuses(options: GetOrderStatusesRequest): Promise<GetOrderStatusesResponse> {
    return this.request('GetOrderStatuses', options)
  }
  
  public async getProducts(options: GetProductsRequest): Promise<GetProductsResponse> {
    return this.request('GetProducts', options)
  }
  
  public async getPromotions(options: GetPromotionsRequest): Promise<GetPromotionsResponse> {
    return this.request('GetPromotions', options)
  }

  public async orderFraudCheck(options: OrderFraudCheckRequest): Promise<OrderFraudCheckResponse> {
    return this.request('OrderFraudCheck', options)
  }

  public async pendingOrder(options: PendingOrderRequest): Promise<PendingOrderResponse> {
    return this.request('PendingOrder', options)
  }

}