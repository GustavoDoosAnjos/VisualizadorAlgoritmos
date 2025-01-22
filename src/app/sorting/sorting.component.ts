import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bubbleSort } from './sorting.tools';

@Component({
  selector: 'app-sorting',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sorting.component.html',
  styleUrl: './sorting.component.scss',
})
export class SortingComponent {
  arraySize: number = 10;
  array: number[] = [];
  sorted?: [[string, number, number]]

  generateNumbers(): void {
    this.array = Array.from({ length: this.arraySize }, () =>
      Math.floor(Math.random() * 110)
    );
  }

  bubbleSort() {
    this.sorted = bubbleSort(this.array);

    this.animate()
  }

  animate(cooldown = 1000) {
    function changeColor(id: number, color: string) {
      document.getElementById(id.toString())!.style.backgroundColor = color;
    }    

    this.sorted?.forEach((animation, index) => {
      const [type, left, right] = animation;
      const time = (cooldown * index) * 0.1;

      setTimeout(() => {
        if (type === 'swap') {
          this.swap(left, right);
          setTimeout(() => {
            changeColor(left, 'darkcyan')
            changeColor(right, 'darkcyan')
          }, time*1.2)
        }
  
        if (type === 'comparison') {
          changeColor(left, 'purple')
          changeColor(right, 'purple')
  
          setTimeout(() => {
            changeColor(left, 'darkcyan')
            changeColor(right, 'darkcyan')
          }, time*0.2)
        }
      }, time*0.3)
    })
  }

  swap(indexLeft: number, indexRight: number): void {
    [this.array[indexLeft], this.array[indexRight]] = [this.array[indexRight], this.array[indexLeft]]
  }

  ngOnInit() {
    this.generateNumbers();
  }
}
