import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateCursoComponent } from './create-curso/create-curso.component';
import { CursoListComponent } from './curso-list/curso-list.component';


const routes: Routes = [
  { path: '', redirectTo: 'cursos', pathMatch: 'full' },
  { path: 'cursos', component: CursoListComponent },
  { path: 'create', component: CreateCursoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
