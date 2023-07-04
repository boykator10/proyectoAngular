import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Celular } from 'src/app/Entidad/Celular';
import { ServiceService } from 'src/app/Servicios/service.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {
  constructor(private router : Router, private service : ServiceService){}
  celular !: Celular[];


  ngOnInit(): void {
   this.listar();
  }

  listar(){
    this.service.listarC().subscribe(data=>{
      this.celular = data;
      console.log("Lista de Celulares"+JSON.stringify(data));
    });
  } //cierra listar

  editar(celular : Celular){
    localStorage.setItem("id",celular.idCelular.toString());
    this.router.navigate(["editar"]);
  }// cierra editar

  eliminar(celular : Celular){
    localStorage.setItem("id",celular.idCelular.toString());
    this.router.navigate(["eliminar"]);
  }// cierra eliminar





}
