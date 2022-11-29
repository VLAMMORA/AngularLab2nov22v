import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from 'src/app/Services/apiservice.service';
import { ConsultasService } from 'src/app/Services/consultas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

 
  constructor(private _api:ApiserviceService) { }

  ngOnInit(): void {


  }

 
}
