import { Component } from '@angular/core';
import { Model, TodoItem } from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todoApp';
  model = new Model();
  isDisPlay=false;

  getName() {
    return this.model.user;
  }
  getItems() {
    if(this.isDisPlay){
      return this.model.items;
    }
    return this.model.items?.filter(item => !item.Action);
  }
  AddItem(value: string) {
    if (value!="") {
      this.model.items?.push(new TodoItem(value, false))
    }
  }
}


