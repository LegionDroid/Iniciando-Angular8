import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngif-ngfor',
  templateUrl: './ngif-ngfor.component.html',
  styleUrls: ['./ngif-ngfor.component.css']
})
export class NgifNgforComponent implements OnInit {

  numero: number;
  arrayNumeros = [1,2,3,4,5];

  constructor() { }

  ngOnInit() {
  }

  metodoQueRetornaTrue() {
    return true;
  }

  verificaSeNumeroMaior5() {
    if (this.numero > 5)
      return true
  }

}
