import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-car',
  templateUrl: './create-car.component.html',
  styleUrls: ['./create-car.component.css']
})
export class CreateCarComponent implements OnInit {
  onCreate(form: NgForm){
    console.log(form.value.brand);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
