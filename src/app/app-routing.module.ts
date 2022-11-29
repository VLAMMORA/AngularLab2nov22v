import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscadorComponent } from './Components/buscador/buscador.component';
import { HeroeComponent } from './Components/heroe/heroe.component';
import { HomeComponent } from './Components/home/home.component';
import { PersonasComponent } from './Components/personas/personas.component';

// Importar los componentes que queremos visualizar
//Home
//Heroe
//Buscador
//Navbar

const routes: Routes = [
  {path:'home' ,component:HomeComponent},
  {path:'heroe' ,component:HeroeComponent},
  {path:'buscador' ,component:BuscadorComponent},
  {path:'buscar/:busqueda' ,component:BuscadorComponent},
  {path:'personas',component:PersonasComponent},
  {path:'**',pathMatch:'full',redirectTo:'home'}

  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
