import {Injectable} from 'angular2/core';

import {PizzaService} from './pizza.service';
import {Pizza} from './pizza';
import {PIZZAS} from './data';

@Injectable()
export class PizzaFileService implements PizzaService {
  getPizzas():Promise<Pizza[]>{
    return Promise.resolve(PIZZAS);
  }
}
