import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fibonaci',
  templateUrl: './fibonaci.component.html',
  styleUrls: ['./fibonaci.component.scss']
})
export class FibonaciComponent implements OnInit {

  count: number;
  constructor() {
    this.count = 1;
   }

  ngOnInit(): void {
  }

  buttonclicked(){
    this.count++;
  }

}
