import {Injectable} from 'angular2/core';

import {Pizza} from './pizza';
import {PIZZAS} from './data';

@Injectable()
export class PizzaService{
  getPizzas():Pizza[]{
    return PIZZAS;
  }
}
