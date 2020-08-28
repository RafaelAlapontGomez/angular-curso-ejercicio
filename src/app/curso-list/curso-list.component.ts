import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable, merge } from "rxjs";
import { CursoService } from "../curso.service";
import { Curso } from "../curso";
import { Router } from '@angular/router';

import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-curso-list',
  templateUrl: './curso-list.component.html',
  styleUrls: ['./curso-list.component.scss']
})
export class CursoListComponent implements OnInit {

  cursos: Observable<Curso[]>;

  dataSource: any; 
  cursosArr: Curso[] = [];
  displayedColumns: string[] = ['titulo', 'profesor', 'nivel', 'numHoras'];

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private cursoService: CursoService) { }

  ngAfterViewInit() {

    console.log("page ==> " + this.paginator.pageIndex);
    console.log("perPage ==> " + this.paginator.pageSize);
    console.log("previousPage ==> " + this.paginator.previousPage);

    this.dataSource = new MatTableDataSource(this.cursosArr);
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit() {
    this.cursoService.getCursoList().subscribe(results => {
      this.cursosArr = results;
      this.dataSource = new MatTableDataSource(this.cursosArr);
      this.dataSource.paginator = this.paginator;
    });
  }

  reloadData() {
    this.cursoService.getCursoList().subscribe(results => this.cursosArr = results);

  }
}
