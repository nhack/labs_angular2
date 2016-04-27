import {Pizza} from './pizza';
import {PIZZAS} from './data';

export class PizzaService{
  getPizzas():Pizza[]{
    return PIZZAS;
  }
}
