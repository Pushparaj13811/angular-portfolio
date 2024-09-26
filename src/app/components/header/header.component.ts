import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})

export class HeaderComponent {
  todo: Todo = {
    title: 'Todo Title',
    description: 'Todo Description',
    completed: false
  };
  constructor() {
    const printTodo = (todo: Todo) => {
      console.log(this.todo);
    };
    printTodo(this.todo);
  }
}
type Todo = {
  title: string;
  description: string;
  completed: boolean;
};