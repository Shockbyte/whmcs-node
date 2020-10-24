export interface GetStatsRequest {
  timeline_days: number;
}

export interface GetStatsResponse {
  result: string;
  income_today: number;
  income_thismonth: number;
  income_thisyear: number;
  income_alltime: number;
  orders_pending: number;
  orders_today_cancelled: number;
  orders_today_pending: number;
  orders_today_fraud: number;
  orders_today_active: number;
  orders_today_total: number;
  orders_yesterday_cancelled: number;
  orders_yesterday_pending: number;
  orders_yesterday_fraud: number;
  orders_yesterday_active: number;
  orders_yesterday_total: number;
  orders_thismonth_total: number;
  orders_thisyear_total: number;
  tickets_allactive: number;
  tickets_awaitingreply: number;
  tickets_flaggedtickets: number;
  tickets_open: number;
  tickets_answered: number;
  tickets_customerreply: number;
  tickets_closed: number;
  tickets_onhold: number;
  tickets_inprogress: number;
  cancellations_pending: number;
  todoitems_due: number;
  networkissues_open: number;
  quotes_valid: number;
  staff_online: number;
  timeline_data: number;
}
