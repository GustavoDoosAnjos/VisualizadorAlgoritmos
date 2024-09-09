import { Component } from '@angular/core';
import { NumberComponent } from '../number/number.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sorting',
  standalone: true,
  imports: [NumberComponent, CommonModule],
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

  ngOnInit() {
    this.generateNumbers();
  }
}
