import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {
  items: any;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getItems();
  }
  getItems() {
    this.http.get("http://localhost:5000/api/items").subscribe((data) => {
      this.items = data;
    }, (error) => {
      console.log(error);
    })
  }
}
