import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from "rxjs";

import { CursoService } from "../curso.service";
import { ProfesorService } from "../profesor.service";
import { NivelService } from "../nivel.service";

import { Curso } from "../curso";
import { Profesor } from "../profesor";
import { Nivel } from "../nivel";

@Component({
  selector: 'app-create-curso',
  templateUrl: './create-curso.component.html',
  styleUrls: ['./create-curso.component.scss']
})
export class CreateCursoComponent implements OnInit {
  cursoForm: FormGroup;

  profesores: Observable<Profesor[]>;
  niveles: Observable<Nivel[]>;
  curso: Curso;

  constructor(
    public cursoService: CursoService, 
    public profesorService: ProfesorService, 
    public nivelService: NivelService, 
    public fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.cursoForm = this.fb.group({
      titulo: [''],
      activo: true,
      profesorId: [''],
      nivel: [''],
      numHoras: ['']    
    })

    this.reloadData();
  }

  reloadData() {
    console.log('reloadData');
    this.profesores = this.profesorService.getProfesorList();
    this.niveles = this.nivelService.getNivelList();   
  }

  submitForm() {

    this.curso = {
      id: null,
      activo:  this.cursoForm.controls.activo.value,
      nivel:  this.cursoForm.controls.nivel.value,
      numHoras:  this.cursoForm.controls.numHoras.value,
      profesor: null,
      profesorId:  this.cursoForm.controls.profesorId.value,
      titulo:  this.cursoForm.controls.titulo.value
    };

    this.cursoService.createCurso(this.curso).subscribe(res => {
      console.log('Curso created!');
      this.router.navigateByUrl('cursos');
    })
  }

}
