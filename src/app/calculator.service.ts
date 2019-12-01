import { Injectable } from '@angular/core';
import { BoxesService } from './boxes/boxes.service';
import { BottlesService } from './bottles/bottles.service';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {



  constructor(
    private boxesService: BoxesService,
    private bottlesService: BottlesService
  ) { }

  getCalculate() {
    const boxes: [] = this.boxesService.getBoxes();
    const bottles: number = this.bottlesService.getBottles();

    console.log('starting calculation');

    for (let i = 0; i < boxes.length; i++) {
      if (this.divisionAndReminder(bottles, boxes[i])[2] === 0 && this.divisionAndReminder(bottles, boxes[i])[3] === 0) {
        console.log('пляшок більше ніж в коробці клітин');
      } else if (this.divisionAndReminder(bottles, boxes[i])[3] === 0) {
        console.log('залишок від ділення = 0');
        return this.divisionAndReminder(bottles, boxes[i]);
      } else {
        console.log(this.divisionAndReminder(bottles, boxes[i]));
      }
    }
  }

  divisionAndReminder(_bottles: number, _box: number) {
    if (_bottles >= _box) {
      const division = Math.floor(_bottles / _box);
      const remainder = _bottles % _box;
      return [_bottles, _box, division, remainder];
    } else {
      return [_bottles, _box, 0, 0];
    }
  }
}
