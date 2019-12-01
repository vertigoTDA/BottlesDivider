import { Component, OnInit } from '@angular/core';
import { BoxesService } from './boxes/boxes.service';
import { BottlesService } from './bottles/bottles.service';
import { CalculatorService } from './calculator.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'BottleDivider';
  result;

  constructor(
    private boxesService: BoxesService,
    private bottlesService: BottlesService,
    private calculatorService: CalculatorService
  ) {
  }

  ngOnInit() {}

  calculate() {
    const result = this.calculatorService.getCalculate();
    if (result) {
      this.result = 'we have: ' + result[2] + ' boxes with ' + result[1] + ' ceils for ' + result[0] + ' bottles; ';
    } else {
      this.result = 'else block of app.component.ts';
    }
  }
}
