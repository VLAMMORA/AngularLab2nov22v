import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from 'src/app/Services/apiservice.service';
import { ConsultasService, IHeroe } from 'src/app/Services/consultas.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {
  //Local
  Heroes : IHeroe[] = [];


  constructor(private _Heroe:ConsultasService, private _apiser:ApiserviceService) { }

  ngOnInit(): void {

    //Llenar la variable local con el metodo
    this.Heroes =this._Heroe.GetHeroes();

    // Mostrar
   console.log(this.Heroes);


   this.Getdata()

  }

  Getdata(){

    this._apiser.getdata().subscribe(data =>console.log(data) )

  }


}
