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
  providers: [PizzaService]
})
export class AppComponent {

  private pizzas: Pizza[];

  constructor(private pizzaService: PizzaService) {
    this.pizzas = this.pizzaService.getPizzas();
  }
}
