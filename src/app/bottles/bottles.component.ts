import { Component, OnInit } from '@angular/core';
import { BottlesService } from './bottles.service';


@Component({
  selector: 'app-bottles',
  templateUrl: './bottles.component.html',
  styleUrls: ['./bottles.component.css']
})
export class BottlesComponent implements OnInit {
  bottles = this.bottlesService.getBottles();
  inputBottle: any;

  constructor(
    private bottlesService: BottlesService
  ) { }

  ngOnInit() {}

  button1() {
    /*
      пляшки із інпута додає в сервіс
      оновлює змінну bottles
      очищає value інпуту
    */
    this.bottlesService.addBottlesFromInput(this.inputBottle);
    this.bottles = this.bottlesService.getBottles();
    this.inputBottle = '';
  }


}
