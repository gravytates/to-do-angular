import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
 <div class="container">
  <h1>To Do List for {{month}}/{{day}}/{{year}}</h1>
   <h3>{{currentFocus}}</h3>
    <ul>
     <li [class]="priorityColor(currentTask)" (click)="isDone(currentTask)" *ngFor="let currentTask of tasks">{{currentTask.description}} <button (click)="editTask(currentTask)">Edit!</button></li>
    </ul>
   <hr>
   <div>
    <h3>{{selectedTask.description}}</h3>
    <p>Task Complete? {{selectedTask.done}}</p>
   <h3>Edit Task</h3>
   <label>Enter Task Description:</label>
   <input [(ngModel)]="selectedTask.description">
    <label>Enter Task Priority (1-3):</label>
    <br>
    <input type="radio" [(ngModel)]="selectedTask.priority" [value]="1">1 (Low Priority)<br>
    <input type="radio" [(ngModel)]="selectedTask.priority" [value]="2">2 (Medium Priority)<br>
    <input type="radio" [(ngModel)]="selectedTask.priority" [value]="3">3 (High Priority)
   </div>
  </div>
  `
})

export class AppComponent {
  currentFocus: string = 'Angular Homework';
  currentTime = new Date();
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();
  tasks: Task[] = [
    new Task('finish weekend Angular homework for Epicodus course', 3),
    new Task('Begin brainstorming possible JavaScript group projects', 2),
    new Task('Add README file to last few Angular repos on Github', 1)
  ];
  selectedTask: Task = this.tasks[0];


  editTask(clickedTask) {
    this.selectedTask = clickedTask;
  }

  priorityColor(currentTask) {
    if (currentTask.priority === 3) {
      return 'bg-danger';
    } else if (currentTask.priority === 2) {
      return 'bg-warning';
    } else {
      return 'bg-info';
    }
  }

  isDone(clickedTask: Task) {
    if (clickedTask.done === true) {
      alert("this task is done!");
    } else {
      alert("This task is not done. better get to work!");
    }
  }
}

export class Task {
  public done: boolean = false;
  constructor(public description: string, public priority: number) { }
}
