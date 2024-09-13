import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { mergeSort } from './sorting.tools';

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

  generateNumbers(): void {
    this.array = Array.from({ length: this.arraySize }, () =>
      Math.floor(Math.random() * 110)
    );
  }

  merge() {
    const sorted = mergeSort(this.array);

    console.log(sorted);
    return sorted;
  }

  ngOnInit() {
    this.generateNumbers();
  }
}
