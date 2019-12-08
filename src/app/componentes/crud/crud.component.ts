import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';
import { Image } from 'src/app/models/placeholder.model';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {

  images: any;
  error: any;

  constructor(private crudService: CrudService) {
    this.getter();
   }

  ngOnInit() {
  }

  getter() {
    this.crudService.getFotos().subscribe(
      (data: Image) => {        //pode não definir o tipo da data tmb. Ex. data => {}
        this.images = data;
        console.log("O data que recebemos", data);
        console.log("A variavel que preenchemos", this.images);

      }, (error: any) => {
        this.error = error;
        console.log("Erro: ", error);
      });
  }

}
