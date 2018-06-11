import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  size = 20;
  unselectedItems = [
    {a: 1, b: "One"},
    {a: 2, b: "Two"},
    {a: 3, b: "Three"},
    {a: 4, b: "Four"},
    {a: 5, b: "Five"},
    {a: 6, b: "Six"},
    {a: 7, b: "Seven"},
    {a: 8, b: "Eight"},
    {a: 9, b: "Nine"},
    {a: 10, b: "Ten"}
  ];
  selectedItems = [
  ];
  sources: any;

  @ViewChild('sourcesPicklist') sourcesPicklist: any;
  
  showSelected() {
    this.sources = this.sourcesPicklist.getSelectedItems();
  }
}
