import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-example',
  templateUrl: './pipe-example.component.html',
  styleUrls: ['./pipe-example.component.css']
})
export class PipeExampleComponent implements OnInit {

  currentDate: Date = new Date();
  oldDate: Date = new Date("12/10/2020");
  amount: number = 45.7;
  word: string = "developer";
  num: number = 5;
  dt: Date=new Date("2/15/2011");
  constructor() { }

  ngOnInit(): void {
    console.log(this.currentDate);
    console.log("Week day: "+ this.currentDate.getDay());
    console.log("Day: "+ this.currentDate.getDate());

    const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
console.log("Month index in array: "+ this.currentDate.getMonth());
console.log("The current month is " + monthNames[this.currentDate.getMonth()]);
    
console.log("Hour is " + this.currentDate.getHours());
console.log("Minute is " + this.currentDate.getMinutes());
console.log("Second is " + this.currentDate.getSeconds());


  }

}
