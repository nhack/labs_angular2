import {Component} from 'angular2/core';
import {ViewEncapsulation} from 'angular2/core';

import {TabsComponent} from './tabs.component';
import {Pizza} from './pizza';
import {PizzaService} from './pizza.service';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  styleUrls: ['app/app.component.css'],
  encapsulation: ViewEncapsulation.None,
  directives: [TabsComponent],
})
export class AppComponent {

  private pizzas: Pizza[];
  private pizzaService: PizzaService;

  constructor() {
    this.pizzaService = new PizzaService();
    this.pizzas = this.pizzaService.getPizzas();
  }
}


//TODO:
//1. create a pizza service loads from file
//2. create a pizza service that loads from http
//3. a need for an interface and callback -> because of async
