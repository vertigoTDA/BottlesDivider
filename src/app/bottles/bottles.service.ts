import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BottlesService {
  bottles = 9;

  constructor() { }

  getBottles() {
    /* повертає кількість пляшок сервісу */
    console.log(this.bottles);
    return this.bottles;
  }


  addBottles(data) {
    /* додає пляшки в сервіс */
    this.bottles += data;
  }

  addBottlesFromInput(_data: any) {
    /*
    створюємо змінну
    перевірка на isNaN
    перевірка щоб не менше 1
    додавання пляшки в сервіс
    */
    const inputBottle = +_data;
    if (isNaN(inputBottle)) {
      console.log('inputBox is not a number');
    } else if (inputBottle < 1) {
      console.log('inputBox is < 1');
    } else {
      this.addBottles(inputBottle);
    }
  }
}
