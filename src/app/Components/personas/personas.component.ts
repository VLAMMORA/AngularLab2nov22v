import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from 'src/app/Services/apiservice.service';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit {


//   mipersona ={
//     "userId": 11111111,
    
//     "title": "z<z<z<z<z",
//     "body": "xzxzxzxzx"
//  }
  constructor(private _servicio:ApiserviceService) { }

  ngOnInit(): void {

    // this.agregar(this.mipersona)
  }



  agregar(persona:any){
  
 
    this._servicio.agregar(persona).subscribe(data=>{
        

      console.log(data);

    })

    
  }

  Test(){

    alert("Hola soy un Form")
  }
}
