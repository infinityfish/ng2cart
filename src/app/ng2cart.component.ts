import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'ng2cart-app',
  templateUrl: 'ng2cart.component.html',
  styleUrls: ['ng2cart.component.css']
})
export class Ng2cartAppComponent {
  title = 'ng2cart';
  public newItem = "";
  public cart = [];   
	public products = [
		{name:"Brakes for Toyota Corrolla", qty: 10, price: 9.95},
    {name:"Clutches", qty: 4, price: 129.95},
    {name:"Suspension", qty: 2, price: 19.95},
    {name:"Plugs", qty: 20, price: 3.95}
	];
  
  
  // constructor(public myTotal = 0){}
  
  	addToCart(product){
	   
	    this.newItem = product;
	    this.cart.push(product);
	    
	    alert("Item added to cart: " + product.name);
	}
  
  cartTotal(){     
      this.cart.forEach(function(item,index){
        console.log(item.qty * item.price); 
        // this.cartTotal +=   item.qty * item.price;
        //  console.log(this.cartTotal);
      }); 
      
     
         
  }
  
  removeItem = function(index) {
        this.cart.splice(index, 1);
    }
  

	            
}
