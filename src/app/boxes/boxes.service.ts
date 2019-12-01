import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BoxesService {
  boxes = [11, 7, 8];

  constructor() { }

  getBoxes() {
    return this.arrayEqualizer(this.boxes);
  }

  addBoxes(data) {
    this.boxes.push(data);
  }

  arrayEqualizer(x) {
    let buffer: number;
    const array = x;
    if (array.length) {
      for (const part of array) {
        for (let j = 0; j < array.length; j++) {
          if (array[j] < array[j + 1]) {
            buffer = array[j + 1];
            array[j + 1] = array[j];
            array[j] = buffer;
          }
        }
      }
    }
    return array;
  }
}
