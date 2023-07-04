import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Celular } from 'src/app/Entidad/Celular';
import { ServiceService } from 'src/app/Servicios/service.service';

@Component({
  selector: 'app-eliminar',
  templateUrl: './eliminar.component.html',
  styleUrls: ['./eliminar.component.css']
})
export class EliminarComponent implements OnInit {
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

  eliminar() {
    this.service.eliminarC(this.celular).subscribe(data => {
      alert("Se elimino el Celular: " + this.celular.marca);
      this.router.navigate(['listar']);
    });
  }



}//cierra Eliminar Component
