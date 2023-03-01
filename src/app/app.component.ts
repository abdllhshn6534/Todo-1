import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todoApp';
  items=[
    {Description:"Kahvaltı", Action:"No"},
    {Description:"Spor", Action:"No"},
    {Description:"Sinema", Action:"No"},
    {Description:"Ders çalışma", Action:"Yes"},

  ]
}
