import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-baverages',
  templateUrl: './baverages.component.html',
  styleUrls: ['./baverages.component.css']
})
export class BaveragesComponent implements OnInit {

  @Input() beverage="tea";
  @Output() newBaveragesEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }
 addNewBeverage(value: string): void {
   this.newBaveragesEvent.emit(value);
 }
}
