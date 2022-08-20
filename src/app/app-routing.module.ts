import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StatistiquesComponent } from './statistiques/statistiques.component';

const routes: Routes = [
  {
    path: 'etat',
    loadChildren: () => import('./etat/etat.module').then(m => m.EtatModule)
  },
  {
    path: 'publique',
    loadChildren: () => import('./publique/publique.module').then(m => m.PubliqueModule)
  },
  {path:'statistiques',component:StatistiquesComponent},
  {path:'',component:HomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
