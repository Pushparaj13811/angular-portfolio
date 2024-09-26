import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'] 
})
export class HomeComponent {
  introduction: Introduction = {
    items: [
      {
        name: 'Pushparaj Mehta',
        age: 22,
        country: 'Nepal',
        Address: '360020, Rajkot, Gujarat, India'
      },
      {
        name: 'John Doe',
        age: 30,
        country: 'USA',
        Address: '360020, Rajkot, Gujarat, India'
      }, {
        name: 'Jane Doe',
        age: 25,
        country: 'UK',
        Address: '360020, Rajkot, Gujarat, India'
      }
    ]
  };
}

// Define the type for a single item
type Item = {
  name: string;
  age: number;
  country: string;
  Address: string;
};

// Define the type for the introduction object
type Introduction = {
  items: Item[];
};
