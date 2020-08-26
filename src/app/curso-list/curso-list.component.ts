import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { CursoService } from "../curso.service";
import { Curso } from "../curso";
import { Router } from '@angular/router';

@Component({
  selector: 'app-curso-list',
  templateUrl: './curso-list.component.html',
  styleUrls: ['./curso-list.component.scss']
})
export class CursoListComponent implements OnInit {

  cursos: Observable<Curso[]>;

  constructor(private cursoService: CursoService, private router: Router) { }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData() {
    this.cursos = this.cursoService.getCursoList();
  }

  createCurso(){
    this.router.navigate(['create']);
  }

}
