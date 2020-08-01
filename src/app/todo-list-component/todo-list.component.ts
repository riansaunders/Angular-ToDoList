import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-todo-list-component',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  public name: string = '';
  public items: Array<TodoItem> = [];

  ngOnInit() {
  }

  public getRemainingCount() {
    return this.items.filter(item => !item.isDone).length;
  }


  public toggleItem(item: TodoItem) {
    item.isDone = !item.isDone;
  }

  addItem() {
    if(this.name.trim() == "") {
      return;
    }

    this.items.push(
      {
        name: this.name,
        isDone: false
      }
    );
    this.name = "";
  }
}
