import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Celular } from 'src/app/Entidad/Celular';
import { ServiceService } from 'src/app/Servicios/service.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {
  constructor(private router: Router, private service: ServiceService) { }


  ngOnInit(): void {
    this.buscar();
  }

  celular: Celular = new Celular();

  buscar() {
    let idCelular = localStorage.getItem('id');
    this.celular.idCelular = Number(idCelular);
    this.service.buscarC(this.celular).subscribe(data => {
      this.celular = data;
    });
  }

  editar() {
    this.service.editarC(this.celular).subscribe(data => {
      alert("Se edito el Celular: " + this.celular.marca);
      this.router.navigate(['listar']);
    });
  }






}
