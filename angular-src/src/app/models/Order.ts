import {IOProduct} from "./OProduct";

export interface IOrder {
  orderNb?: string;
  orderDate?: string;
  clientName?: string;
  clientAliases?: string;
  contactNb?: number;
  address?: string;
  products?: IOProduct[];
  //products?: any[];
  subAmount?: number;
  totalAmount?: number;
  profit?: number;
  discount?: number;
  shipmentFee?: number;
  grandTotal?: number;
  paidAmount?: number;
  dueAmount?: number;
  paymentType?: string;
  paymentStatus?: string;
  orderStatus?: string;
  trackNb?: string;
}
