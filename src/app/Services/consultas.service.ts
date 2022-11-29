import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConsultasService {
 //https:myapi.com/listado
  private Heroes:IHeroe[] = [

    {

      nombre: "Batman",
      biografia: "Su habilidad se resumen plata y un traje ",
      imagen: "assets/img/batman.png",
      Fecha:"1941-11-01",
      Universo:"DC"
    },
    {

      nombre: "Wolverine",
      biografia: "Su habilidad se resume en poderes regenerativos y garras ",
      imagen: "assets/img/wolverine.png",
      Fecha:"1974-11-01",
      Universo:"MARVEL"
    },

    {

      nombre: "Spider-Man",
      biografia: "Su habilidad se resume una araña radiactiva, traje y amor por marry jane ",
      imagen: "assets/img/spiderman.png",
      Fecha:"1962/11/01",
      Universo:"MARVEL"
    },
    {

      nombre: "Batman",
      biografia: "Su habilidad se resumen plata y un traje ",
      imagen: "assets/img/batman.png",
      Fecha:"1941-11-01",
      Universo:"DC"
    },
    {

      nombre: "Wolverine",
      biografia: "Su habilidad se resume en poderes regenerativos y garras ",
      imagen: "assets/img/wolverine.png",
      Fecha:"1974-11-01",
      Universo:"MARVEL"
    },

    {

      nombre: "Spider-Man",
      biografia: "Su habilidad se resume una araña radiactiva, traje y amor por marry jane ",
      imagen: "assets/img/spiderman.png",
      Fecha:"1962/11/01",
      Universo:"MARVEL"
    }



  ]
  constructor() {


  }




 GetHeroes():IHeroe[]{

  return this.Heroes ;

 }



  LlamaraBryan(){

    console.log("Llamando a Bryan....")
  }

  LLamaraWarner(){
    console.log("Llamando a Warner....")

  }

  
  buscador(busqueda:string){


    let arreglo:IHeroe[] = [];

    busqueda = busqueda.toLocaleLowerCase();

    for (let index = 0; index < this.Heroes.length; index++) {
      
      
        let heroe = this.Heroes[index]

        let nombre = heroe.nombre.toLocaleLowerCase();

        if (nombre.indexOf(busqueda) >=0) {
          
          arreglo.push(heroe)
        }

    }



    return arreglo;

  }

}


export interface IHeroe{

  nombre: string,
  biografia: string,
  imagen: string,
  Fecha:string,
  Universo:string
   idx?:number

}
