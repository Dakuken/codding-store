import { Component, OnInit } from "@angular/core";
import { Cart, CartItem } from "src/app/models/cart.model";
import { CartService } from "../../services/cart.service";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.css"]
})
export class CartComponent implements OnInit {
  cart: Cart = {
    items: [{
      product: "https://via.placeholder.com/150",
      name: "snickers",
      price: 150,
      quantity: 1,
      id: 1
    },
      {
        product: "https://via.placeholder.com/150",
        name: "snickers",
        price: 150,
        quantity: 5,
        id: 2
      }]
  };
  dataSource: CartItem[] = [];
  displayedColumns: string[] = ["product", "name", "price", "quantity", "total", "action"];

  constructor(private cartService: CartService) {
  }

  ngOnInit(): void {
    this.cartService.cart.subscribe(_cart => {
      this.cart = _cart;
      this.dataSource = this.cart.items;
    });
  }

  getTotal = (items: CartItem[]): number => this.cartService.getTotal(items);

  onClearCart() : void  {
    this.cartService.clearCart();
  }

  onRemoveFromCart(item : CartItem) {
  this.cartService.removeFromCart(item)
  }

  onAddQuantity(item : CartItem){
    this.cartService.addToCart(item)
  }

  onRemoveQuantity(item : CartItem){
    this.cartService.removeQuantity(item)
  }


}
