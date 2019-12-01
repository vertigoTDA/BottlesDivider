import { Component, OnInit } from '@angular/core';
import { BoxesService } from './boxes.service';


@Component({
  selector: 'app-boxes',
  templateUrl: './boxes.component.html',
  styleUrls: ['./boxes.component.css']
})
export class BoxesComponent implements OnInit {

  boxes = this.boxesService.getBoxes();
  boxesToString = this.boxes.join(', ');
  inputBox: any;

  constructor(
    private boxesService: BoxesService
  ) { }

  ngOnInit() {}

  button3() {
    const inputBox = +this.inputBox;
    const repeatedSize: boolean = this.checkForRepeatedBoxes(inputBox, this.boxes);

    if (repeatedSize) {
      console.log('box like this already exist');
      this.inputBox = '';
    } else if (isNaN(inputBox)) {
      console.log('inputBox is not a number');
    } else if (inputBox < 1) {
      console.log('inputBox is < 1');
    } else {
      this.boxesService.addBoxes(inputBox);
      this.boxes = this.boxesService.getBoxes();
      this.boxesToStringMethod();
      this.inputBox = '';
      console.log(this.boxes);
    }
  }



  checkForRepeatedBoxes(data: number, array): boolean {
    let ansver = false;
    for (let i = 0; i < array.length; i++) {
      if (data == array[i]) {
        ansver = true;
      }
    }
    return ansver;
  }

  boxesToStringMethod() {
    this.boxesToString = this.boxes.join(', ');
  }

}
