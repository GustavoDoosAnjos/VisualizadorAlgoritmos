import { Component } from '@angular/core';

@Component({
  selector: 'app-sorting',
  standalone: true,
  imports: [],
  templateUrl: './sorting.component.html',
  styleUrl: './sorting.component.scss',
})
export class SortingComponent {
  private generateNumbers(): number[] {
    const array: number[] = [];
    const arraySize = document.querySelector('.arraySize') as HTMLInputElement;

    return array;
  }
}
