import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  numero: number;
  numeroChange: number;
  numeroBlur: number;

  constructor() { }

  ngOnInit() {
  }

  obtemNumero (numero: number){
    this.numeroChange = numero + 200;
  }

}
