import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from 'src/app/Services/apiservice.service';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit {
//Modelo
  Mipersona:any = {
       "userId": "",
       "title": "",
       "body": ""
  }


  constructor(private _servicio:ApiserviceService) { }

  ngOnInit(): void {

    // this.agregar(this.mipersona)
  }



  agregar(){

    console.log(this.Mipersona)
    this._servicio.agregar(this.Mipersona).subscribe(data=>{


      console.log(data);

    })


  }

  Test(){

    alert("Hola soy un Form")
  }
}
