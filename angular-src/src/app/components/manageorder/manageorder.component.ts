import { Component, OnInit } from '@angular/core';
import {OrderService} from "../../services/order.service";
import {IOrder} from "../../models/Order";
import {MenuItem, SelectItem} from "primeng/primeng";
import {Order} from "../order/order.component";
import {ProductService} from "../../services/product.service";
import {IOProduct} from "../../models/OProduct";
import {Message} from "primeng/primeng";
import {ConfirmDialogModule,ConfirmationService} from 'primeng/primeng';


@Component({
  selector: 'app-manageorder',
  templateUrl: './manageorder.component.html',
  styleUrls: ['./manageorder.component.css']
})
export class ManageorderComponent implements OnInit {

  orders: IOrder[];
  order: IOrder;
  displayDialog: boolean;
  products: any[] = [];
  prodSelection: any[] = [];
  selectedProd: IOProduct;
  msgs: Message[] = [];

  private items: MenuItem[];
  private orderStatus: SelectItem[];
  paymentTypes: any[];
  paymentStatuses: any[];
  constructor(private orderService: OrderService,
              private productService: ProductService,
              private confirmationService: ConfirmationService) { }

  ngOnInit() {
    this.items = [
      {label: 'Home'},
      {label: 'Order'},
      {label: 'Manage Order'}
    ];

    this.orderStatus = [
      {label: 'Select', value: null},
      {label: 'Processing', value: 'Processing'},
      {label: 'Ready to go', value: 'Ready to go'},
      {label: 'Shipped', value: 'Shipped'},
      {label: 'Delivered', value: 'Delivered'}
    ];

    // Define Payment Types
    this.paymentTypes = [
      {label: 'Select', value: null},
      {label: 'Alipay', value: 'Alipay'},
      {label: 'Wechat', value: 'Wechat'},
      {label: 'Cash', value: 'Cash'},
      {label: 'Bank Deposit', value: 'Bank Deposit'},
      {label: 'Not Applicable', value: 'Not Applicable'},


    ];

    // Define Payment Status
    this.paymentStatuses = [
      {label: 'Select', value: null},
      {label: 'Full Payment', value: 'Full Payment'},
      {label: 'Advance Payment', value: 'Advance Payment'},
      {label: 'No Payment', value: 'No Payment'},
    ];


    // Get all available products for puchase
    this.productService.getProd().subscribe(products => {
      console.log('products => ' + JSON.stringify(products, null, 4));


      // set available products dynamically
      for (var i in products.data) {
        if (products.data[i].prodStatus == 'Available') {
          if (products.data[i].prodSpecs == undefined) {
            var spec = '';

          } else {
            spec = ' - ' + products.data[i].prodSpecs;
          }
          this.prodSelection.push({
            "label": products.data[i].prodName + spec,
            //"value": {'name': products.data[i].prodName, 'rate' : products.data[i].prodRate},
            "value": products.data[i].prodName + spec,
            "rate": products.data[i].prodRate
          });

        }
      }
    });

    // Get orders from the db
    this.orderService.getOrders().subscribe(orders => {
      this.orders = orders.data;
      console.log('this orders 11=> ' + JSON.stringify(this.orders, null, 4));
    });

    //console.log('this orders => ' + JSON.stringify(this.orders, null, 4));
  }


  // On double click the order row
  onRowDblclick(event) {
    console.log('event => ' + JSON.stringify(event, null, 4));
    this.onEditClick(event.data);

  }

  // onEditClick event
  onEditClick(row) {
    console.log('Edit Button Clicked');
    console.log('row => ' + JSON.stringify(row, null, 4));
    this.order = row;
    this.displayDialog = true;

    console.log('this.order => ' + JSON.stringify(this.order, null, 4));

  }

  onEditQuantity(event){
    console.log('Table value changed');
    console.log('event => ' + JSON.stringify(event, null, 4));
    //console.log('row => ' + JSON.stringify(row, null, 4));

    // update item total

    event.data.total = event.data.rate * event.data.quantity;

    // update total
    this.updateTotal();
  }

  // Add Item Click
  addItem() {
    console.log('add item button pressed');
    //this.order.products = [...this.order.products, {name: 'test', rate: 20}];
    this.order.products = [...this.order.products, {}];


  }

  onChange(event, prod, col) {
    console.log('event => ' + JSON.stringify(event, null, 4));
    console.log('prod => ' + JSON.stringify(prod, null, 4));
    //console.log('index => ' + JSON.stringify(col, null, 4));

    prod.rate = this.prodSelection.find(function isSelect(select) {
      return select.value === event.value;
    }).rate;
    //this.order.products = [...this.order.products, {name: event.value, rate: 20}];


  }


  // Update Order
  updateOrder() {
    console.log('update order pressed');
    console.log('this updated order => ' + JSON.stringify(this.order, null, 4));
    this.orderService.updateOrder(this.order).subscribe(data => {
      console.log('data => ' + JSON.stringify(data, null, 4));
      if(data.success) {
        this.msgs = [];
        this.msgs.push({severity: 'success', detail: 'Order Updated.'});
      } else {
        this.msgs = [];
        this.msgs.push({severity: 'error', detail: 'Update failed'});
      }
    });
    this.displayDialog = false;
  }

  // Delete Orde
  onRemoveOrderClick(row) {

    this.confirmationService.confirm({
      message: 'Do you want to delete this order?',
      header: 'Delete Confirmation',
      icon: 'fa fa-trash',
      accept: () => {
        this.orderService.deleteOrder(row).subscribe(data => {
          if (data.success) {
            this.msgs = [{severity:'info', summary:'Confirmed', detail:'Order deleted'}];

          } else {
            this.msgs = [{severity:'error', summary:'Error', detail:'Failed to delete order '}];
          }
          // Get orders from the db
          this.orderService.getOrders().subscribe(orders => {
            this.orders = orders.data;
            console.log('this orders 11=> ' + JSON.stringify(this.orders, null, 4));
          });
        });

      },
      reject: () => {
        this.msgs = [{severity:'info', summary:'Rejected', detail:'You have rejected'}];
      }
    });


  }



  onRemoveClick(row ,index ) {
    console.log('row => ' + JSON.stringify(row, null, 4));
    console.log('index => ' + index);
    //this.order.products.splice(i, 1);
    this.order.products = this.order.products.filter((val,i) => i!=index);
    this.updateTotal();
  }


  // Update Total
  updateTotal() {
    // update sub total
    var sub = 0;
    for (var i in this.order.products) {
      console.log('i => ' + this.order.products[i]);
      sub += this.order.products[i].total;
    }
    this.order.subAmount = sub;
    // update grand total
    this.order.grandTotal = (this.order.subAmount + this.order.shipmentFee)*(1 + this.order.profit/100) - this.order.discount;

    //update due amount
    this.order.dueAmount = this.order.grandTotal - this.order.paidAmount;
  }


}
