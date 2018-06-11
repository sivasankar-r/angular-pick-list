import { Component, OnInit, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-pick-list',
  templateUrl: './pick-list.component.html',
  styleUrls: ['./pick-list.component.css']
})
export class PickListComponent implements OnInit {

  @Input('selectedItems') selectedItems: any[] = [];
  @Input('unselectedItems') unselectedItems: any[] = [];
  @Input('size') size: any;
  @Input('valueMember') valueMember: string;
  @Input('displayMember') displayMember: string;

  highlightedForSelecting: any;
  highlightedForUnselecting: any;

  constructor() { }

  ngOnInit() {
    if (!this.size) {
      this.size = 10;
    }
    if(!this.valueMember) {
      this.valueMember = 'id';
    }
    if(!this.displayMember) {
      this.displayMember = 'text';
    }
    console.log('value member ', this.valueMember, 'display member', this.displayMember);
  }

  dblClickSelectItem(item: any): void {
    this.unselectedItems.splice(this.unselectedItems.findIndex(obj => obj[this.valueMember] === item[this.valueMember]), 1);
    this.selectedItems.push(item);
  }

  dblClickUnselectItem(item: any): void {
    this.selectedItems = this.selectedItems.filter(obj => obj[this.valueMember] !== item[this.valueMember]);
    this.unselectedItems.push(item);
  }

  btnClickSelectItems(): void {
    if (this.highlightedForSelecting) {
      this.highlightedForSelecting.forEach(element => {
        this.unselectedItems.splice(this.unselectedItems.findIndex(obj => obj[this.valueMember] === element[this.valueMember]), 1);
        this.selectedItems.push(element);
      });
    }
    this.highlightedForSelecting = [];
  }

  btnClickUnselectItems(): void {
    if (this.highlightedForUnselecting) {
      this.highlightedForUnselecting.forEach(element => {
        this.selectedItems.splice(this.selectedItems.findIndex(obj => obj[this.valueMember] === element[this.valueMember]), 1);
        this.unselectedItems.push(element);
      });
    }
    this.highlightedForUnselecting = [];
  }

  getSelectedItems() {
    return this.selectedItems;
  }

}
